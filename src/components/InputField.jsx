import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputField = styled.div`
  position: relative;
  margin: 20px;
`;

const Input = styled.input`
  display: block;
  width: 230px;
  padding: 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-bottom: 2px solid var(--color-grey-400);
  position: relative;

  &[type="date"]::before {
    content: attr(placeholder);
    color: var(--color-grey-600);
    position: absolute;
    top: 10px;
  }

  &[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }

  &[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  }

  &[type="date"]:focus::before {
    color: transparent;
  }

  &:focus + label {
    top: -20px;
    font-size: 12px;
    color: var(--color-green-500);
  }

  &:focus + label + span {
    width: 230px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
`;

const Underline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: var(--color-green-600);
  transition: all 0.3s ease;
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
}) {
  return (
    <StyledInputField>
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
      <Underline />
    </StyledInputField>
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
};

export default InputField;
