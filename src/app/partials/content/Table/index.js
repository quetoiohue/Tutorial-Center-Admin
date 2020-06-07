import React from "react";
import EnhancedTable from "./EnhancedTable";

const MatTable = ({ headRows, rows = [], onClickRow }) => {
  return (
    <>
      <EnhancedTable headRows={headRows} rows={rows} onClickRow={onClickRow}/>
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
