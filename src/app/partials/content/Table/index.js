import React from "react";
import EnhancedTable from "./EnhancedTable";

const MatTable = ({ headRows, rows = [], onClickRow, count, isFetching, ...props }) => {
  
  return (
    <>
      <EnhancedTable
        headRows={headRows}
        rows={rows}
        onClickRow={onClickRow}
        count={count}
        isFetching={isFetching}
        {...props}
      />
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
