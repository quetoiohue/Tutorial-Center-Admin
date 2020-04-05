import React from "react";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";

const CustomizedIconButton = ({ Icon, title, onClick, style }) => {
  return (
    <Tooltip TransitionComponent={Zoom} title={title}>
      <IconButton onClick={onClick} style={style}>
        {Icon}
      </IconButton>
    </Tooltip>
  );
};

CustomizedIconButton.propTypes = {};

export default CustomizedIconButton;
