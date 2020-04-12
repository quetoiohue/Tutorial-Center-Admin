/* eslint-disable no-restricted-imports */

import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 250
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

export default function CustomizedInputBase({ placeholder, onChange }) {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState("");
  const typingTimeoutRef = React.useRef(null);

  function handleChangeSearchText(event) {
    const value = event.target.value;
    setSearchText(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      onChange(value);
    }, 300);
  }
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={searchText}
        onChange={handleChangeSearchText}
        inputProps={{ "aria-label": placeholder }}
      />
      <SearchIcon />
    </Paper>
  );
}
