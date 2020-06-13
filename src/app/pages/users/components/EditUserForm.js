import { Button, Toolbar } from "@material-ui/core";
import React from "react";
import {
  FormTextField,
  MultiSelectField,
  validateForm,
} from "../../../partials/content/Form";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import { roleOptions } from "../../../mockData/users";
import { useDispatch, useSelector } from "react-redux";
import userActions from '../../../store/ducks/actions/users';
import CustomizedAlert from '../../../partials/content/CustomizedAlert';

const EditUserForm = ({ open, handleClose, selected }) => {
  const dispatch = useDispatch();
  const { userList, roleList } =  useSelector(store => store) || {};
  const { error, isFetching } = userList;
  const { roles: defaultRoles } = roleList;

  const [formState, setFormState] = React.useState(() => {
    const { name: username, email, permissions } = selected;
    const roles = defaultRoles.filter((role) => (permissions.findIndex(_permission => _permission.id === role.id) !== -1));
    console.log("selected", selected, roles);

    return { username, email, roles };
  });
  const [isValidate, setIsValidate] = React.useState(true);

  const { username, email, roles } = formState;
  console.log(formState);

  const onChangeRole = (values) => {
    setFormState((prevState) => ({
      ...prevState,
      roles: [...values],
    }));
  };
  const handleChange = ({ value, name }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isValidateForm = validateForm(formState);
    setIsValidate(isValidateForm);

    if (!validateForm(formState)) return;
    dispatch(userActions.setUserRoles({id: selected.id, roles: roles.map(_role => _role.id)}));
    if (error.message) {
      console.log("errror", error.message);
      return;
    }
    handleClose();
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <FormTextField
        disabled
        label={"Username"}
        name="username"
        value={username}
        onChange={handleChange}
        error={!isValidate && "Username is required"}
      />
      <FormTextField
        disabled
        label={"Email"}
        name="email"
        value={email}
        onChange={handleChange}
        error={!isValidate && "Email is required"}
      />
      <MultiSelectField
        label={"Role"}
        name="roles"
        value={roles}
        onChange={onChangeRole}
        options={defaultRoles}
        error={!isValidate && "Role is required"}
      />
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={handleClose}
          style={{ marginLeft: "16px" }}
        >
          Cancel
        </Button>
      </Toolbar>
    </form>
  );
  return (
    <CustomizedModal
      open={open}
      handleClose={handleClose}
      children={SubmitForm}
    />
  );
};

EditUserForm.propTypes = {};

export default EditUserForm;
