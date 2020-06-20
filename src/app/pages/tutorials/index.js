import {
  AddBox,
  ArrowRightAlt,
  Delete,
  RemoveCircle,
} from "@material-ui/icons";
import { default as React } from "react";
import { Link } from "react-router-dom";
import { createData, headRows, rowsData } from "../../mockData/tutorials";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import Rating from "../../partials/content/Socials/Rating";
import MatTable from "../../partials/content/Table";
import DeleteModal from "./components/DeleteModal";
import tutorialActions from "../../store/ducks/actions/tutorials";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import LoadingProgress from "../../components/LoadingProgress";

const Tutorials = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState({
    type: "",
    selected: {},
  });
  const { tutorials, count, isFetching } = useSelector((store) => store.tutorialList);
  const { type } = modal;

  React.useEffect(() => {
    dispatch(tutorialActions.getTutorials());
  }, []);

  const dataRows = React.useMemo(() => {
    if (!tutorials) return [];
    return tutorials.map((_item, index) => {
      const averagingRate =
        _item.rates.length &&
        _item.rates.reduce((sum, rate) => sum + rate.score, 0) /
          _item.rates.length;
      return createData(
        _item.id,
        _item.id,
        _item.author.name,
        _item.title,
        <Rating number={Number.parseInt(averagingRate)} fontSize="small" />,
        moment(_item.updated_at).format("DD/MM/YYYY"),
        moment(_item.created_at).format("DD/MM/YYYY"),
        <>
          <CustomizedIconButton
            onClick={() => hasDeleteTutorialModal("delete", _item)}
            Icon={<Delete />}
            title="Delete"
          />
          {false ? (
            <CustomizedIconButton Icon={<AddBox />} title="Unblock" />
          ) : (
            <CustomizedIconButton Icon={<RemoveCircle />} title="Block" />
          )}
          <Link to={`/tutorials/${_item.id}`}>
            <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
          </Link>
        </>
      );
    });
  }, [tutorials]);

  console.log(dataRows);

  const hasDeleteTutorialModal = (type, selected) => {
    setModal((prevState) => ({
      ...prevState,
      type,
      selected,
    }));
  };

  const handleCloseDeleteModal = () => {
    setModal((prevState) => ({
      ...prevState,
      type: "",
      selected: {},
    }));
  };

  const handleDeleteTutorial = (id) => {
    console.log("deleting submit");
    tutorialActions.deleteTutorialById(id);
  };

  const handleSetActiveTutorial = ({id , is_active}) => {
    console.log("set active submit");
    tutorialActions.setActiveTutorialById({id , is_active});
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Tutorial management</h1>
      </div>
      <MatTable
        headRows={headRows}
        rows={dataRows}
        count={count}
        isFetching={isFetching}
      />
      {
        <DeleteModal
          open={type === "delete"}
          handleClose={handleCloseDeleteModal}
          handleSubmit={handleDeleteTutorial}
        />
      }
    </>
  );
};

export default Tutorials;
