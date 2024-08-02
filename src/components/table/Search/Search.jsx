import { useState, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import {
  SearchContainer,
  SearchButton,
  SearchInput,
  Caret,
  OptionsList,
  Option,
} from "./Search.styled";

function Search({ options, value, setSearchValue, onChange, searchBy }) {
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
    <SearchContainer>
      <SearchButton
        onClick={() => setIsOpen(prev => !prev)}
        onBlur={() => setIsOpen(false)}
      >
        <span>{searchBy?.label}</span>
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
      </SearchButton>
      <SearchInput
        placeholder="Search..."
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={e => setSearchValue(e.target.value)}
      />
    </SearchContainer>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.func,
  options: PropTypes.arrayOf(object),
  onChange: PropTypes.func,
  searchBy: PropTypes.object,
};

export default Search;
