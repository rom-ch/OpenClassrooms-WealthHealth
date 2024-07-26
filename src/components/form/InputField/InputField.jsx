import PropTypes from "prop-types";
import { ErrorMessage } from "../../form/ErrorMessage/ErrorMessage.styled";
import { StyledInputField, Input, Label } from "./InputField.styled";

function InputField({
  type = "text",
  label,
  placeholder,
  autoFocus,
  required,
  value,
  onChange,
  fieldName,
  error,
  width,
}) {
  return (
    <>
      <StyledInputField $width={width}>
        <Input
          type={type}
          placeholder={!value ? placeholder : ""}
          id="input-field"
          autoFocus={autoFocus}
          required={required}
          value={value}
          onChange={e => onChange(fieldName, e.target.value)}
        />
        <Label htmlFor="input-field">{label}</Label>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </StyledInputField>
    </>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  fieldName: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
};

export default InputField;
