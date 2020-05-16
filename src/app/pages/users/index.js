/* eslint-disable no-restricted-imports */
import { Checkbox, Chip } from "@material-ui/core";
import {
  AddBox,
  AddCircleOutline,
  ArrowRightAlt,
  Edit,
  RemoveCircle,
} from "@material-ui/icons";
import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createData, headRows, rowsData } from "../../mockData/users";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import MatTable from "../../partials/content/Table";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

const Users = () => {
  // const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [Modal, setModal] = React.useState({
    modal: "add",
    selected: {},
  });
  const { modal, selected } = Modal;

  const rows = rowsData.map((_item, index) =>
    createData(
      _item.id,
      _item.name,
      _item.email,
      <Checkbox checked={_item.isActive} />,
      <>
        {_item.role.map((_el) => (
          <Chip
            key={_el.title}
            style={{ marginBottom: "2px" }}
            label={_el.title}
            color="primary"
          />
        ))}
      </>,
      _item.last_modified,
      _item.last_created,
      <>
        <CustomizedIconButton
          onClick={() => handleSelectModal("edit", _item)}
          Icon={<Edit />}
          title="Edit"
        />
        {false ? (
          <CustomizedIconButton Icon={<AddBox />} title="Unblock" />
        ) : (
          <CustomizedIconButton Icon={<RemoveCircle />} title="Block" />
        )}
        <Link to="/users/1">
          <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
        </Link>
      </>
    )
  );

  React.useEffect(() => {
    return () => {};
  }, []);

  const handleSelectModal = (modal = "add", selected = {}) => {
    setOpen(true);
    setModal({
      modal,
      selected,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>User management</h1>
        <CustomizedIconButton
          onClick={() => handleSelectModal("add", {})}
          style={{ marginLeft: "4px" }}
          Icon={<AddCircleOutline />}
          title="Add User"
        />
      </div>
      <MatTable headRows={headRows} rows={rows} />
      {modal === "add" ? (
        <AddUserForm open={open} handleClose={handleClose} />
      ) : (
        <EditUserForm
          open={open}
          handleClose={handleClose}
          selected={selected}
        />
      )}
    </>
  );
};

export default Users;
