import PropTypes, { object } from "prop-types";
import { useState } from "react";
import Table from "./Table";
import Select from "../ui/Select";
import styled from "styled-components";

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

const SelectsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-self: end;
`;

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState({
    label: "Order :",
    value: "order",
  });
  const [sortBy, setSortBy] = useState({
    label: "Sort by :",
    value: "sortby",
  });
  const { data, config } = props;

  let sortedData = data;
  if (sortOrder && sortBy.value !== "sortby") {
    const { sortValue } = config.find(column => column.label === sortBy.label);
    sortedData = [...data].sort((a, b) => {
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
