import PropTypes from "prop-types";

function Search({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
