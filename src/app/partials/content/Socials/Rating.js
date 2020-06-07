import React from "react";
import PropTypes from "prop-types";
import { Grade } from "@material-ui/icons";

const Rating = ({ number, fontSize = "large" }) => {
  return (
    <div className="my-rating--container">
      {[...Array(5)].map((item, index) => (
        <span key={`${index}-rate`}>
          <Grade
            fontSize={fontSize}
            style={{ color: index <= number - 1 ? "yellow" : "black" }}
          />
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  number: PropTypes.number,
  fontSize: PropTypes.string,
};

export default Rating;
