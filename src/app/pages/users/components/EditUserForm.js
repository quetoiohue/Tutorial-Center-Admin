import { Button, Toolbar } from "@material-ui/core";
import React from "react";
import {
  FormTextField,
  MultiSelectField,
  validateForm,
} from "../../../partials/content/Form";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import { roleOptions } from "../../../mockData/users";

const EditUserForm = ({ open, handleClose, selected }) => {
  const [formState, setFormState] = React.useState(() => {
    const { name: username, email, role } = selected;
    return { username, email, password: "123123", role };
  });
  const [isValidate, setIsValidate] = React.useState(true);

  const { username, password, email, role } = formState;
  console.log(formState);

  const onChangeRole = (values) => {
    setFormState((prevState) => ({
      ...prevState,
      role: [...values],
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
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <FormTextField
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
      <FormTextField
        label={"Password"}
        name="password"
        value={password}
        onChange={handleChange}
        error={!isValidate && "Password is required"}
        type="password"
      />
      <MultiSelectField
        label={"Role"}
        name="role"
        value={role}
        onChange={onChangeRole}
        options={roleOptions}
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
