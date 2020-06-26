import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Select
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

export const FormTextField = ({
  type = "text",
  name,
  label,
  value: Value,
  onChange,
  error,
  disabled = false,
  required = true
}) => {
  const [isError, setIsError] = React.useState(false);
  // const isError = !Boolean(value || !error || value.length);

  const handleChange = event => {
    const { name, value } = event.target;
    onChange({ name, value });
  };
  const handleBlur = () => {
    if (!Value) setIsError(true);
    else setIsError(false);
  };
  return (
    <FormControl error={isError} style={{ margin: "4px 0px", width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Input
        required={required}
        disabled={disabled}
        type={type}
        name={name}
        value={Value}
        onChange={handleChange}
        onBlur={handleBlur}
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
        required
        multiple
        filterSelectedOptions
        options={options}
        getOptionLabel={option => option.name}
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
export const SelectField = ({ value, onChange, options, label }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        label={label}
        inputProps={{
          name: label,
          id: "outlined-age-native-simple"
        }}
      >
        {options.map((_item, index) => {
          return (
            <option key={`${_item.value}-${index}`} value={_item.value}>
              {_item.label}
            </option>
          );
        })}
      </Select>
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
