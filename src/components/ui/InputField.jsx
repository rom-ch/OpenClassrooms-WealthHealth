import PropTypes from "prop-types";
import styled from "styled-components";
import ErrorMessage from "../form/ErrorMessage";

const StyledInputField = styled.div`
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  /* max-width: 230px; */

  max-width: ${props => (props.$width === "full" ? "100%" : "230px")};
`;

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--color-grey-400);
  outline: 0;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 3px;
    border-color: var(--color-green-600);
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: var(--color-green-500);
    font-weight: 500;
    font-size: 14px;
  }

  /* &[type="date"]::before {
    content: attr(placeholder);
    color: var(--color-grey-600);
    position: absolute;
    top: 20px;
  } */

  /* &[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }

  &[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  } */

  /* &[type="date"]:focus::before {
    color: transparent;
  } */
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--color-grey-500);
  pointer-events: none;
`;

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
