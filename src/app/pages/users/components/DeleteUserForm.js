import { Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import userActions from "../../../store/ducks/actions/users";

const DeleteUserForm = ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const { id } = selected;

  const onSubmit = event => {
    event.preventDefault();
    dispatch(userActions.deleteUser(id));
    handleClose();
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <Typography align="center" variant="h6" gutterBottom>
        {`Do you want to delete this user?`}
      </Typography>
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={handleClose}
          style={{ marginLeft: "16px" }}
        >
          Cancel
        </Button>
      </Toolbar>
    </form>
  );
  return (
    <CustomizedModal
      open={open}
      handleClose={handleClose}
      children={SubmitForm}
    />
  );
};

DeleteUserForm.propTypes = {};

export default DeleteUserForm;
