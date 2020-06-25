import React from "react";
import { useDispatch } from "react-redux";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import { Button, Typography, Toolbar } from "@material-ui/core";
import tutorialActions from "../../../store/ducks/actions/tutorials";

const DeleteModal = ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const { id } = selected;

  const onSubmit = event => {
    event.preventDefault();
    console.log("delete tutorial submit", id);
    dispatch(tutorialActions.deleteTutorialById(id));
    handleClose();
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <Typography align="center" variant="h6" gutterBottom>
        {`Do you want to delete this tutorial?`}
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

DeleteModal.propTypes = {};

export default DeleteModal;
