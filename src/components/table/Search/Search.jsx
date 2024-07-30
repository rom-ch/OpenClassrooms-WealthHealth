import { useState } from "react";
import PropTypes from "prop-types";
import { Button, SearchLabel, SearchInput } from "./Search.styled";
import { IoSearchOutline } from "react-icons/io5";

function Search({ value, setSearchValue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button $active={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <SearchLabel htmlFor="search">
          <IoSearchOutline />
        </SearchLabel>
      </Button>
      <SearchInput
        placeholder="Search..."
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={e => setSearchValue(e.target.value)}
        $active={isOpen}
        onBlur={() => setIsOpen(false)}
      />
    </>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default Search;
