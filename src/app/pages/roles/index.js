import {
  Delete,
  Edit,
  AddCircleOutline
} from "@material-ui/icons";
import { default as React } from "react";
import { createData, headRows, rowsData } from "../../mockData/roles";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import MatTable from "../../partials/content/Table";
import DeleteRoleModal from "./components/DeleteRoleModal";
import AddRoleModal from "./components/AddRoleModal";
import EditRoleModal from './components/EditRoleModal';

const Roles = () => {
  const [modal, setModal] = React.useState({
    type: "",
    selected: {},
  });

  const { type } = modal;

  const dataRows = rowsData.map((_item, index) => {
    return createData(
      _item.id,
      _item.name,
      <>
        <CustomizedIconButton
          onClick={() => hasRoleModalAction("delete", _item)}
          Icon={<Delete />}
          title="Delete role"
        />
        <CustomizedIconButton
          onClick={() => hasRoleModalAction("edit", _item)}
          Icon={<Edit />}
          title="Edit role"
        />
      </>
    );
  });

  const hasRoleModalAction = (type, selected) => {
    setModal((prevState) => ({
      ...prevState,
      type,
      selected,
    }));
  };

  const handleCloseModal = () => {
    setModal((prevState) => ({
      ...prevState,
      type: "",
      selected: {},
    }));
  };

  const handleDeleteTutorial = () => {
    console.log("deleting submit");
  };
  console.log(">>>>>>", modal);
  
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Role management</h1>
        <CustomizedIconButton
          onClick={() => hasRoleModalAction("add", {})}
          style={{ marginLeft: "4px" }}
          Icon={<AddCircleOutline />}
          title="Add User"
        />
      </div>
      <MatTable headRows={headRows} rows={dataRows} />
      {<>
        <AddRoleModal open={type === "add"} handleClose={handleCloseModal} />
        <EditRoleModal open={type === "edit"} handleClose={handleCloseModal} />

        <DeleteRoleModal
          open={type === "delete"}
          handleClose={handleCloseModal}
          handleSubmit={handleDeleteTutorial}
        />
        </>
      }
    </>
  );
};

export default Roles;
