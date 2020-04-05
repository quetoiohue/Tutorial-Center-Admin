import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";
import EnhancedTable from "./EnhancedTable";
import { Link } from "react-router-dom";

function createData(
  id,
  name,
  email,
  isActive,
  last_modified,
  last_created,
  actions
) {
  return { id, name, email, isActive, last_modified, last_created, actions };
}

const rows = [...Array(13).keys()].map((_item, index) =>
  createData(
    _item,
    "Gwang Chan",
    "quangtran16t3@gmail.com",
    <Checkbox checked={true} />,
    "2020-03-20",
    "2020-03-20",
    <Link to="/users/1"> Detail</Link>
  )
);

const headRows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    sortable: true,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "isActive",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "isActive",
  },
  {
    id: "Last_modified",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Last modified",
  },
  {
    id: "Last_created",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Last Created",
  },
  {
    id: "actions",
    numeric: true,
    sortable: false,
    disablePadding: false,
    label: "Actions",
  },
];

const MatTable = (props) => {
  return (
    <>
      <EnhancedTable headRows={headRows} rows={rows} />
    </>
  );
};

MatTable.propTypes = {};

export default MatTable;
