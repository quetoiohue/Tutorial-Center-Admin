import React from "react";
import PropTypes from "prop-types";
import { Grade } from "@material-ui/icons";

const Rating = ({ number, fontSize = "large" }) => {
  return (
    <>
      {[...Array(number)].map((item, index) => (
        <span key={`${index}-rate`}>
          <Grade fontSize="large" style={{ color: "yellow" }} />
        </span>
      ))}
    </>
  );
};

Rating.propTypes = {
  number: PropTypes.number,
  fontSize: PropTypes.string,
};

export default Rating;
