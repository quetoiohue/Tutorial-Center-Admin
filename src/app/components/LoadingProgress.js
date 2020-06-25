import { CircularProgress } from "@material-ui/core";
import React from "react";

const LoadingProgress = props => {
  return (
    <div className="my-progress-container">
      <CircularProgress />
    </div>
  );
};

LoadingProgress.propTypes = {};

export default LoadingProgress;
