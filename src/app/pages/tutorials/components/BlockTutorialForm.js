import { Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import tutorialActions from "../../../store/ducks/actions/tutorials";

const BlockTutorialForm = ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const { id, is_active } = selected;

  const onSubmit = event => {
    event.preventDefault();
    console.log("set active submit", id, is_active);
    dispatch(tutorialActions.setActiveTutorialById({ id, is_active }));
    handleClose();
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <Typography align="center" variant="h6" gutterBottom>
        {`Do you want to ${is_active ? "block" : "unblock"} this tutorial?`}
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

BlockTutorialForm.propTypes = {};

export default BlockTutorialForm;
