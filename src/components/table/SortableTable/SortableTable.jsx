import PropTypes, { object } from "prop-types";
import { useState } from "react";
import Table from "../Table/Table";
import Select from "../Select/Select";
import {
  Container,
  SearchContainer,
  SelectContainer,
} from "./SortableTable.styled";
import Search from "../Search/Search";

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
      Object.values(el).some(value =>
        String(value.toLowerCase()).includes(searchValue.toLowerCase())
      )
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
      <Container>
        <SearchContainer>
          <Search value={searchValue} setSearchValue={setSearchValue} />
        </SearchContainer>
        <SelectContainer>
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
        </SelectContainer>
      </Container>

      <Table {...props} data={sortedData} />
    </>
  );
}

SortableTable.propTypes = {
  data: PropTypes.arrayOf(object),
  config: PropTypes.arrayOf(object),
};

export default SortableTable;
