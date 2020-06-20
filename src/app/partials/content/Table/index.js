import React from "react";
import EnhancedTable from "./EnhancedTable";

const MatTable = ({ headRows, rows = [], isFetching, ...props }) => {
  return (
    <>
      <EnhancedTable
        headRows={headRows}
        rows={rows}
        isFetching={isFetching}
        {...props}
      />
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
