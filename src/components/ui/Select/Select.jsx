import PropTypes, { object } from "prop-types";
import { useEffect, useState } from "react";
import {
  Container,
  Value,
  Divider,
  OptionsList,
  Option,
  Caret,
} from "./Select.styled";

function Select({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function selectOption(option) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <Container
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
    >
      <Value>{value?.label}</Value>
      <Divider />
      <Caret />
      <OptionsList $isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.value}
            $isOptionSelected={isOptionSelected(option)}
            onMouseEnter={() => setHighlightedIndex(index)}
            $isHighlighted={index === highlightedIndex}
          >
            {option.label}
          </Option>
        ))}
      </OptionsList>
    </Container>
  );
}

Select.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(object),
};

export default Select;
