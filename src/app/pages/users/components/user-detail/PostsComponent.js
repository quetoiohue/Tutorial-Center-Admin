import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
import React from "react";

const PostsComponent = ({ title, content, expanded, handleChange }) => {
  return (
    <>
      <ExpansionPanel
        className="tutorial-step"
        expanded={expanded}
        onChange={handleChange}
      >
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="kt-expand__head-label"
        >
          <Typography className="kt-expand__head-title">{title}</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className="tutorial-step-container--content">
          {content}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

PostsComponent.propTypes = {};

export default PostsComponent;
