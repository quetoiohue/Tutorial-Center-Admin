import React from "react";
import EnhancedTable from "./EnhancedTable";

const MatTable = ({ headRows, rows }) => {
  return (
    <>
      <EnhancedTable headRows={headRows} rows={rows} />
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
