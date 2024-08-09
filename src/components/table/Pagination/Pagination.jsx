import PropTypes from "prop-types";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { StyledPagination, Button } from "./Pagination.styled";

function Pagination({ rowsPerPage, length, handlePagination, currentPage }) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / rowsPerPage); i++) {
    paginationNumbers.push(i);
  }

  function handleClickPrev() {
    if (currentPage <= 1) return;
    handlePagination(currentPage - 1);
  }

  function handleClickNext() {
    if (currentPage >= paginationNumbers.length) return;
    handlePagination(currentPage + 1);
  }

  return (
    <StyledPagination>
      <Button onClick={() => handlePagination(1)}>
        <FiChevronsLeft />
      </Button>
      <Button onClick={handleClickPrev}>
        <FiChevronLeft />
      </Button>
      {paginationNumbers.map(pageNumber => (
        <Button
          $active={currentPage === pageNumber}
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <Button onClick={handleClickNext}>
        <FiChevronRight />
      </Button>
      <Button onClick={() => handlePagination(paginationNumbers.length)}>
        <FiChevronsRight />
      </Button>
    </StyledPagination>
  );
}

Pagination.propTypes = {
  rowsPerPage: PropTypes.number,
  length: PropTypes.number,
  currentPage: PropTypes.number,
  handlePagination: PropTypes.func,
};

export default Pagination;
