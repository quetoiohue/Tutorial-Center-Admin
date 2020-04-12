/* eslint-disable no-restricted-imports */
import {
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField
} from "@material-ui/core";
import {
  AddBox,
  AddCircleOutline,
  ArrowRightAlt,
  Edit,
  RemoveCircle
} from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomizedIconButton from "../../partials/content/CustomizedIconButton";
import MatTable from "../../partials/content/Table";
import * as actions from "../../store/ducks/actions";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

// hard code
const data = { id: 1, username: "A" };
const data1 = { id: 2, username: "P" };

const roleOptions = [
  { title: "post-tutorial" },
  { title: "comment" },
  { title: "like" }
];

function createData(
  id,
  name,
  email,
  isActive,
  role,
  last_modified,
  last_created,
  actions
) {
  return {
    id,
    name,
    email,
    isActive,
    role,
    last_modified,
    last_created,
    actions
  };
}
const headRows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    sortable: true,
    label: "Username"
  },
  {
    id: "email",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Email"
  },
  {
    id: "isActive",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "isActive"
  },
  {
    id: "role",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Roles"
  },
  {
    id: "last_modified",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Last modified"
  },
  {
    id: "last_created",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Last Created"
  },
  {
    id: "actions",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Actions"
  }
];

const rowsData = [...Array(13).keys()].map((_item, index) => {
  let boolRandom = Math.random() >= 0.5;
  let indexRandom = Math.floor(Math.random() * (roleOptions.length - 0));
  return createData(
    _item,
    "Gwang Chan",
    "quangtran16t3@gmail.com",
    boolRandom,
    roleOptions.filter((_, index) => index !== indexRandom),
    `2020-03-2${index % 10}`,
    "2020-03-20",
    null
  );
});

// ==================End hard code ================

export const FormTextField = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  disabled = false
}) => {
  const isError = !Boolean(value || !error || value.length);
  return (
    <FormControl error={isError} style={{ margin: "4px 0px", width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Input
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {!isError ? null : <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
export const MultiSelectField = ({ value, onChange, options, error }) => {
  const handleChange = (event, values) => {
    onChange(values);
  };
  const isError = !Boolean(!error || value.length);
  return (
    <FormControl error={isError} style={{ margin: "4px 0px", width: "100%" }}>
      <Autocomplete
        multiple
        filterSelectedOptions
        options={options}
        getOptionLabel={option => option.title}
        onChange={handleChange}
        value={[...value]}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Roles"
            placeholder="Roles"
            fullWidth
          />
        )}
      />
      {!isError ? null : <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
export const validateForm = state => {
  if (!Object.keys(state).length) return false;
  return !Object.keys(state).some(
    _key =>
      state[_key] === undefined || state[_key] === "" || state[_key] === null
  );
};

const Users = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [Modal, setModal] = React.useState({
    modal: "add",
    selected: {}
  });
  const { modal, selected } = Modal;

  const rows = rowsData.map((_item, index) =>
    createData(
      _item.id,
      _item.name,
      _item.email,
      <Checkbox checked={_item.isActive} />,
      <>
        {_item.role.map(_el => (
          <Chip
            key={_el.title}
            style={{ marginBottom: "2px" }}
            label={_el.title}
            color="primary"
          />
        ))}
      </>,
      _item.last_modified,
      _item.last_created,
      <>
        <CustomizedIconButton
          onClick={() => handleSelectModal("edit", _item)}
          Icon={<Edit />}
          title="Edit"
        />
        {false ? (
          <CustomizedIconButton Icon={<AddBox />} title="Unblock" />
        ) : (
          <CustomizedIconButton Icon={<RemoveCircle />} title="Block" />
        )}
        <Link to="/users/1">
          <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
        </Link>
      </>
    )
  );

  React.useEffect(() => {
    dispatch(actions.actionsUser.getUserList());
    dispatch(actions.actionsUser.addUser(data));
    dispatch(actions.actionsUser.deleteUser(data));
    dispatch(actions.actionsUser.updateUser(data1));
  }, []);

  const handleSelectModal = (modal = "add", selected = {}) => {
    setOpen(true);
    setModal({
      modal,
      selected
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>User management</h1>
        <CustomizedIconButton
          onClick={() => handleSelectModal("add", {})}
          style={{ marginLeft: "4px" }}
          Icon={<AddCircleOutline />}
          title="Add User"
        />
      </div>
      <MatTable headRows={headRows} rows={rows} />
      {modal === "add" ? (
        <AddUserForm open={open} handleClose={handleClose} />
      ) : (
        <EditUserForm
          open={open}
          handleClose={handleClose}
          selected={selected}
        />
      )}
    </>
  );
};

export default Users;
