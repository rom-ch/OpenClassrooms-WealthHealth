import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;
  margin: 20px;
  width: 230px;
`;

const InputControl = styled.div`
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-bottom: 2px solid var(--color-grey-400);

  &:focus + label {
    top: -20px;
    font-size: 12px;
    color: var(--color-green-500);
  }

  &:focus + label + span {
    width: 100%;
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

const StyledFaAngleDown = styled(FaAngleDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

const OptionList = styled.ul`
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 10;
  border: 1px solid var(--color-grey-400);
  max-height: 200px;
  overflow-y: auto;
  display: ${props => (props.$isOpen ? "block" : "none")};
`;

const OptionItem = styled.li`
  display: block;
  cursor: pointer;
  padding: 8px 18px;

  &:hover {
    background-color: hsl(72, 88%, 23%, 0.15);
  }
`;

function Dropdown({ options, label, value, onChange, fieldName }) {
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
};

export default Dropdown;
