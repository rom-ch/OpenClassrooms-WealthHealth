import PropTypes, { object } from "prop-types";
import { useState } from "react";
import Table from "../Table/Table";
import Select from "../../ui/Select/Select";
import { SelectsContainer } from "./SortableTable.styled";

const sortByOptions = [
  { label: "First Name", value: "First Name" },
  { label: "Last Name", value: "Last Name" },
  { label: "Date of Birth", value: "Date of Birth" },
  { label: "Start Date", value: "Start Date" },
  { label: "Department", value: "Department" },
  { label: "Street", value: "Street" },
  { label: "City", value: "City" },
  { label: "State", value: "State" },
  { label: "Zip", value: "Zip" },
];

const OrderOptions = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

function SortableTable(props) {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState({
    label: "Order :",
    value: "order",
  });
  const [sortBy, setSortBy] = useState({
    label: "Sort by :",
    value: "sortby",
  });
  const { data, config } = props;

  let filteredData = data;

  if (searchValue.length >= 3) {
    filteredData = [...data].filter(el =>
      Object.values(el).some(value => String(value).includes(searchValue))
    );
  }

  let sortedData = filteredData;

  if (sortOrder && sortBy.value !== "sortby") {
    const { sortValue } = config.find(column => column.label === sortBy.label);
    sortedData = [...filteredData].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder.value === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <>
      <SelectsContainer>
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        <Select
          options={sortByOptions}
          value={sortBy}
          onChange={o => setSortBy(o)}
        />
        <Select
          options={OrderOptions}
          value={sortOrder}
          onChange={o => setSortOrder(o)}
        />
      </SelectsContainer>

      <Table {...props} data={sortedData} />
    </>
  );
}

SortableTable.propTypes = {
  data: PropTypes.arrayOf(object),
  config: PropTypes.arrayOf(object),
};

export default SortableTable;
