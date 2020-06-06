/* eslint-disable no-restricted-imports */
import { Checkbox, Chip, CircularProgress } from "@material-ui/core";
import {
  AddBox,
  AddCircleOutline,
  ArrowRightAlt,
  Edit,
  RemoveCircle,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment';

import { createData, headRows, rowsData } from "../../mockData/users";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import MatTable from "../../partials/content/Table";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import * as Actions from "../../store/ducks/actions";
import userApi from "../../store/ducks/api/users";

const initialModalState = {
  modal: "",
  selected: {},
}
const Users = (props) => {
  const dispatch = useDispatch();
  const { users, isFetching } = useSelector((store) => store.userList);
  const [open, setOpen] = React.useState(false);
  const [Modal, setModal] = React.useState(initialModalState);
  const { modal, selected } = Modal;

  React.useEffect(() => {
    dispatch(Actions.User.getUserList());
  }, []);

  const rows = React.useMemo(
    () =>
      users &&
      users.map((_item, index) => {
        const permissions =
          _item.permissions &&
          _item.permissions.map((_item) => ({
            name: _item.name,
            id: _item.pivot.permission_id,
          }));
        const { id, email, name, ...item } = _item;
        const selectedItem = { id, email, name, permissions };
        return createData(
          _item.id,
          _item.name,
          _item.email,
          <Checkbox checked={Boolean(_item.is_active)} />,
          <>
            {permissions.map((_el) => (
              <Chip
                key={_el.id}
                style={{ marginBottom: "2px" }}
                label={_el.name}
                color="primary"
              />
            ))}
          </>,
          _item.updated_at && moment(_item.updated_at).format("DD/MM/YYYY"),
          _item.updated_at && moment(_item.created_at).format("DD/MM/YYYY"),
          <>
            <CustomizedIconButton
              onClick={() => handleSelectModal("edit", selectedItem)}
              Icon={<Edit />}
              title="Edit"
            />
            {_item.is_active ? (
              <CustomizedIconButton Icon={<AddBox />} title="Unblock" />
            ) : (
              <CustomizedIconButton Icon={<RemoveCircle />} title="Block" />
            )}
            <Link to={`/users/${_item.id}`}>
              <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
            </Link>
          </>
        );
      }),
    [users]
  );

  const handleSelectModal = (modal, selected = {}) => {
    setModal({
      modal,
      selected,
    });
  };

  const handleClose = () => {
    setModal(initialModalState);
  };

  return (
    <>
      <div className="layout-header-toolbar">
        <h1>User management</h1>
        <CustomizedIconButton
          onClick={() => handleSelectModal("add")}
          className="header-toolbar-btn"
          Icon={<AddCircleOutline />}
          title="Add User"
        />
      </div>
      {isFetching ? (
        <div className="my-progress-container">
          <CircularProgress />
        </div>
      ) : (
        <MatTable headRows={headRows} rows={rows} />
      )}
      {modal === "add" && (
        <AddUserForm open={modal === "add"} handleClose={handleClose} />
      )} 
      {modal === "edit" && (
        <EditUserForm
          open={modal === "edit"}
          handleClose={handleClose}
          selected={selected}
        />
      )}
    </>
  );
};

export default Users;
