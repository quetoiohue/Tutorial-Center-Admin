import { Button, Toolbar } from "@material-ui/core";
import React from "react";
import CustomizedModal from "../../../partials/content/CustomizedModal";
import { FormTextField, validateForm } from "../../../partials/content/Form";

const initialFormState = {
  role: ""
};

const AddUserForm = ({ open, handleClose }) => {
  const [formState, setFormState] = React.useState(initialFormState);
  const [isValidate, setIsValidate] = React.useState(true);

  const { role } = formState;
  console.log(formState);

  const handleChange = ({ name, value }) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    const isValidateForm = validateForm(formState);
    setIsValidate(isValidateForm);

    if (!validateForm(formState)) return;
    setFormState(initialFormState);
  };

  const SubmitForm = (
    <form onSubmit={onSubmit}>
      <FormTextField
        label={"Role"}
        name="role"
        value={role}
        onChange={handleChange}
        error={!isValidate && "Role is required"}
      />
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
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

AddUserForm.propTypes = {};

export default AddUserForm;
