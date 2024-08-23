import PropTypes, { object } from "prop-types";
import { useState } from "react";
import Table from "../Table/Table";
import Select from "../Select/Select";
import {
  Container,
  SelectContainer,
  ItemsNumberContainer,
} from "./SortableTable.styled";
import Search from "../Search/Search";
import {
  searchByOptions,
  sortByOptions,
  orderOptions,
  itemsPerPage,
} from "../../../utils/TableConfig";
import Pagination from "../Pagination/Pagination";

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
  const [searchBy, setSearchBy] = useState({
    label: "All",
    value: "all",
  });

  const { data, config } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState({
    label: "5",
    value: 5,
  });

  let filteredData = data;
  if (searchValue.length >= 3) {
    filteredData = data.filter(el => {
      if (searchBy.value === "all") {
        return Object.values(el).some(value =>
          String(value).toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        return String(el[searchBy.value])
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
    });
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

  const indexOfLastRow = currentPage * rowsPerPage.value;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage.value;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Container>
        <Search
          options={searchByOptions}
          value={searchValue}
          setSearchValue={setSearchValue}
          searchBy={searchBy}
          onChange={o => {
            setSearchBy(o);
            setSearchValue("");
          }}
        />
        <ItemsNumberContainer>
          <label>Per page:</label>
          <Select
            options={itemsPerPage}
            value={rowsPerPage}
            onChange={o => setRowsPerPage(o)}
          />
        </ItemsNumberContainer>
        <SelectContainer>
          <Select
            options={sortByOptions}
            value={sortBy}
            onChange={o => setSortBy(o)}
          />
          <Select
            options={orderOptions}
            value={sortOrder}
            onChange={o => setSortOrder(o)}
          />
        </SelectContainer>
      </Container>

      <Table {...props} data={currentRows} />
      <Pagination
        length={data.length}
        rowsPerPage={rowsPerPage.value}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </>
  );
}

SortableTable.propTypes = {
  data: PropTypes.arrayOf(object),
  config: PropTypes.arrayOf(object),
};

export default SortableTable;
