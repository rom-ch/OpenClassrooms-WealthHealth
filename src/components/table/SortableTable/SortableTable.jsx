import PropTypes, { object } from "prop-types";
import { useState } from "react";
import Table from "../Table/Table";
import Select from "../Select/Select";
import { SortingHeader, SelectContainer } from "./SortableTable.styled";
import { sortByOptions, OrderOptions } from "../../../utils/TableConfig";
import Search from "../Search/Search";

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
        String(value).toLowerCase().includes(searchValue.toLowerCase())
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
      <SortingHeader>
        <Search
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
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
      </SortingHeader>

      <Table {...props} data={sortedData} />
    </>
  );
}

SortableTable.propTypes = {
  data: PropTypes.arrayOf(object),
  config: PropTypes.arrayOf(object),
};

export default SortableTable;
