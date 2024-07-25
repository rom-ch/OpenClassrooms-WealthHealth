import PropTypes, { object } from "prop-types";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 11em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.6em 0.5em;
  border-radius: 0.25em;
  outline: none;
  font-size: 0.8em;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:focus {
    border-color: hsl(200, 100%, 20%);
  }
`;

const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

const Caret = styled.div`
  border: 0.25em solid transparent;
  border-top-color: #777;
  cursor: pointer;
`;

const OptionsList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;

  display: ${props => (props.$isOpen ? "block" : "none")};
`;

const Option = styled.li`
  padding: 0.25em 0.5em;
  cursor: pointer;

  ${props => props.$isOptionSelected && Selected}
  ${props => props.$isHighlighted && Highlighted}
`;

const Selected = css`
  background-color: var(--color-green-600);
  color: white;
`;

const Highlighted = css`
  background-color: hsla(72, 88%, 30%, 0.2);
`;

const Value = styled.span`
  flex-grow: 1;
  cursor: pointer;
`;

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
