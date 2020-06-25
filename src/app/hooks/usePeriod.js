import React from "react";

const usePeriod = (defaultValue = "day") => {
  const [period, setPeriod] = React.useState(defaultValue);
  console.log("use ALLAL", period);

  return {
    period,
    handleChangePeriod: event => {
      const { value } = event.target;
      setPeriod(value);
    }
  };
};

export default usePeriod;
