import React from "react";
import EnhancedTable from "./EnhancedTable";

const MatTable = ({ headRows, rows = [], onClickRow, pagination, setPagination, count, isFetching, ...props }) => {
  console.log("setPagination", pagination, count );
  
  return (
    <>
      <EnhancedTable
        headRows={headRows}
        rows={rows}
        onClickRow={onClickRow}
        pagination={pagination}
        setPagination={setPagination}
        count={count}
        isFetching={isFetching}
        {...props}
      />
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
