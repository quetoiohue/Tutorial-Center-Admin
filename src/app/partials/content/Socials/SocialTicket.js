import { Card, CardContent } from "@material-ui/core";
import React from "react";

const SocialTicket = ({ label, value, icon, color, classStyle = "" }) => {
  return (
    <Card className={`bg-light-${color} card col col-lg-12 nopadding`}>
      <CardContent className={"card-content " + classStyle}>
        <div className={`col bg-light-${color} px-6 py-8 rounded-xl`}>
          <span className={`d-block my-2 color-dark-${color}`}>{icon}</span>
          <span
            className={`color-dark-${color} font-weight-bold font-size-h6 text-label`}
          >
            {label}
          </span>
        </div>
        <span className={`color-dark-${color} font-weight-bold text-value`}>
          {value}
        </span>
      </CardContent>
    </Card>
  );
};

SocialTicket.propTypes = {};

export default SocialTicket;
