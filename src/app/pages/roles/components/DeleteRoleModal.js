import React from "react";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import { Button } from "@material-ui/core";

const DeleteModal = props => {
  const { open, handleClose, handleSubmit } = props;

  const DeleteContent = (
    <div className="my-form">
      <h3 className="form__title">Would you like to delete this role.</h3>
      <div className="form__bottom">
        <div className="form__bottom--toolbar">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="form__bottom-toolbar--button"
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={handleClose}
            className="form__bottom-toolbar--button"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <CustomizedModal
        open={open}
        handleClose={handleClose}
        children={DeleteContent}
      />
    </>
  );
};

DeleteModal.propTypes = {};

export default DeleteModal;
