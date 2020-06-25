import { Avatar, Checkbox } from "@material-ui/core";
import {
  AddBox,
  ArrowRightAlt,
  Delete,
  RemoveCircle
} from "@material-ui/icons";
import moment from "moment";
import { default as React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createData, headRows } from "../../mockData/tutorials";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import Rating from "../../partials/content/Socials/Rating";
import MatTable from "../../partials/content/Table";
import tutorialActions from "../../store/ducks/actions/tutorials";
import BlockTutorialForm from "./components/BlockTutorialForm";
import DeleteModal from "./components/DeleteModal";

const Tutorials = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState({
    type: "",
    selected: {}
  });
  const { tutorials, count, isFetching } = useSelector(
    store => store.tutorialList
  );
  const { type, selected } = modal;

  React.useEffect(() => {
    dispatch(tutorialActions.getTutorials());
  }, [dispatch]);

  const dataRows = React.useMemo(() => {
    if (!tutorials) return [];
    return tutorials.map((_item, index) => {
      return createData(
        _item.id,
        _item.id,
        {
          value: (
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <span style={{ marginRight: "8px" }}>
                <Avatar src={_item.author.avatar_url} />
              </span>
              <span>{_item.author.name} </span>
            </div>
          ),
          subValue: _item.author.name
        },
        _item.title,
        {
          value: <Checkbox checked={Boolean(_item.is_active)} />,
          subValue: Boolean(_item.is_active)
        },
        {
          value: <Rating number={_item.average_rate} fontSize="small" />,
          subValue: _item.average_rate
        },
        moment(_item.updated_at).format("DD/MM/YYYY"),
        moment(_item.created_at).format("DD/MM/YYYY"),
        <>
          <CustomizedIconButton
            onClick={() => hasTutorialModalType("delete", _item)}
            Icon={<Delete />}
            title="Delete"
          />
          {_item.is_active ? (
            <CustomizedIconButton
              onClick={() => hasTutorialModalType("block", _item)}
              Icon={<RemoveCircle />}
              title="Block"
            />
          ) : (
            <CustomizedIconButton
              onClick={() => hasTutorialModalType("block", _item)}
              Icon={<AddBox />}
              title="Unblock"
            />
          )}
          <Link to={`/tutorials/${_item.id}`}>
            <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
          </Link>
        </>
      );
    });
  }, [tutorials]);

  console.log(dataRows);

  const hasTutorialModalType = (type, selected) => {
    setModal(prevState => ({
      ...prevState,
      type,
      selected
    }));
  };

  const resetTutorialModalType = () => {
    setModal(prevState => ({
      ...prevState,
      type: "",
      selected: {}
    }));
  };

  return (
    <>
      <div className="layout-header-toolbar">
        <h1>Tutorial management</h1>
      </div>
      <MatTable
        headRows={headRows}
        rows={dataRows}
        count={count}
        isFetching={isFetching}
      />
      {type === "delete" && (
        <DeleteModal
          open={type === "delete"}
          handleClose={resetTutorialModalType}
          selected={selected}
        />
      )}
      {type === "block" && (
        <BlockTutorialForm
          open={type === "block"}
          handleClose={resetTutorialModalType}
          selected={selected}
        />
      )}
    </>
  );
};

export default Tutorials;
