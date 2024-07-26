import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.styled";
import {
  StyledDropdown,
  InputControl,
  Input,
  Label,
  StyledFaAngleDown,
  OptionList,
  OptionItem,
} from "./Dropdown.styled";

function Dropdown({ options, label, value, onChange, fieldName, error }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  });

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  function selectOption(option) {
    setQuery(() => "");
    onChange(fieldName, option);
    setIsOpen(isOpen => !isOpen);
  }

  function getDisplayValue() {
    if (query) return query;
    if (value) return value;
    return "";
  }

  const filteredItems = options.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <StyledDropdown>
      <InputControl>
        <Input
          placeholder={label}
          id="input-dropdown"
          ref={inputRef}
          type="text"
          value={getDisplayValue()}
          onChange={e => {
            onChange(fieldName, e.target.value);
            setQuery(e.target.value);
          }}
          onClick={toggle}
          onFocus={toggle}
        />
        <Label htmlFor="input-dropdown">{label}</Label>
        <StyledFaAngleDown />
      </InputControl>
      <OptionList $isOpen={isOpen}>
        {filteredItems.map((option, i) => (
          <OptionItem key={i} onClick={() => selectOption(option.name)}>
            {option.name}
          </OptionItem>
        ))}
      </OptionList>
      <ErrorMessage>{error}</ErrorMessage>
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  fieldName: PropTypes.string,
  error: PropTypes.string,
};

export default Dropdown;
