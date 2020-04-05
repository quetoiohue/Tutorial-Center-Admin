import React from "react";
import { useDispatch } from "react-redux";
import { AddCircleOutline } from "@material-ui/icons";

import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import * as actions from "../../store/ducks/actions";
import MatTable from "../../partials/content/Table";

const data = { id: 1, username: "A" };
const data1 = { id: 2, username: "P" };

const Users = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.actionsUser.getUserList());
    dispatch(actions.actionsUser.addUser(data));
    dispatch(actions.actionsUser.deleteUser(data));
    dispatch(actions.actionsUser.updateUser(data1));
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>User management WIP</h1>
        <CustomizedIconButton
          style={{ marginLeft: "4px" }}
          Icon={<AddCircleOutline />}
          title="Add User"
        />
      </div>
      <MatTable />
    </>
  );
};

export default Users;
