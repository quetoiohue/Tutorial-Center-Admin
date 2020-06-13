import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import messageActions from '../../store/ducks/actions/message';

const CustomizedAlert = () => {
  const dispatch = useDispatch();
  const { color, message, title, visible } = useSelector(store => store.notification);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(messageActions.hiddenMessage());
  };
  return (
    <>
      <Snackbar
        open={visible}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert onClose={handleClose} severity={color}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

CustomizedAlert.propTypes = {};

export default CustomizedAlert;
