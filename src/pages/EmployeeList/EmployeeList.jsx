import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import EmployeesContext from "../../contexts/EmployeesContext";
import SortableTable from "../../components/table/SortableTable/SortableTable";
import { Heading, TableContainer } from "./EmployeeList.styled";
import { config } from "../../utils/TableConfig";

function EmployeeList({ isFormOpen }) {
  const { employees, getEmployees, isLoading } = useContext(EmployeesContext);

  useEffect(() => {
    if (!isFormOpen) getEmployees();
  }, [isFormOpen]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Heading>Employees List</Heading>
      <TableContainer>
        <SortableTable data={employees} config={config} />
      </TableContainer>
    </>
  );
}

EmployeeList.propTypes = {
  isFormOpen: PropTypes.bool,
};

export default EmployeeList;
