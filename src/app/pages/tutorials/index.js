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

const Tutorials = () => {
  const [modal, setModal] = React.useState({
    type: "",
    selected: {},
  });

  const dataRows = rowsData.map((_item, index) => {
    return createData(
      _item.id,
      _item.post_id,
      _item.author_id,
      _item.title,
      <Rating number={_item.rates} fontSize="small" />,
      _item.last_modified,
      _item.last_created,
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
        <Link to={`/tutorials/1`}>
          <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
        </Link>
      </>
    );
  });
  console.log(rowsData);

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

  const handleDeleteTutorial = () => {
    console.log("deleting submit");
  };

  const { type } = modal;

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Tutorial management</h1>
      </div>
      <MatTable headRows={headRows} rows={dataRows} />
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
