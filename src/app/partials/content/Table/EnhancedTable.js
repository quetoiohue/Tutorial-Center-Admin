/* eslint-disable no-restricted-imports */

import {
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LoadingProgress from "../../../components/LoadingProgress";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: "auto",
  },
}));

export default function EnhancedTable(props) {
  const {
    headRows: headRowsProps,
    rows: rowsProps,
    isFetching,
  } = props;
  console.log("Props", props);

  const classes = useStyles();
  const [headRows, setHeadRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    setRows(rowsProps);
    setHeadRows(headRowsProps);
  }, [rowsProps]);

  function handleChangeSearchText(value) {
    setSearchText(value.toLowerCase());
    setPage(0);
    // if (!rows.length) return [];
    const newRows = rowsProps.filter(_item => {
      return Object.keys(_item).some((_el) =>
        String(_item[_el])
          .toLowerCase()
          .includes(value)
      );
    });    
    
    return setRows(newRows);
  }

  function handleDeleteItems() {
    if (!selected.length) return;
    selected.forEach((_el) => handleDeleteItem(_el));
  }
  function handleDeleteItem(id) {
    let deleteIndex = rows.findIndex((_el) => _el.id === id);
    const newRows = rows;
    newRows.splice(deleteIndex, 1);
    setRows([...newRows]);
    setSelected([]);
  }
  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleChangePage(event, page) {
    console.log("newPage", page);

    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    console.log("RowsPerPage", event.target.value);
    const { value } = event.target;
    setRowPerPage(value);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  const handleClickRow = (item) => () => {
    if (!props.onClickRow) {
      return;
    }

    props.onClickRow(item);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          onChangeSearch={handleChangeSearchText}
          searchText={searchText}
          handleDelete={handleDeleteItems}
        />
        <div className={classes.tableWrapper}>
          {isFetching ? (
            <LoadingProgress />
          ) : (
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                headRows={headRows}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                nonMultiSelect={props.nonMultiSelect}
              />
              <TableBody>
                <>
                  {stableSort(rows, getSorting(order, orderBy))
                    // .filter((_item) => onSearching(_item))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                          onClick={handleClickRow(row)}
                          style={{
                            cursor: props.onClickRow ? "pointer" : "default",
                          }}
                        >
                          {Object.keys(row).map((_el, _index) =>
                            _el !== "id" ? (
                              _index === 1 ? (
                                <TableCell
                                  key={`${_el}-${_index}`}
                                  component="th"
                                  id={labelId}
                                  scope="row"
                                  // padding="none"
                                >
                                  {row[_el]}
                                </TableCell>
                              ) : (
                                <TableCell
                                  key={`${_el}-${_index}`}
                                  align={
                                    typeof row[_el] === "string" ||
                                    typeof row[_el] === "object"
                                      ? "left"
                                      : "right"
                                  }
                                >
                                  {row[_el]}
                                </TableCell>
                              )
                            ) : null
                          )}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </>
              </TableBody>
            </Table>
          )}
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
