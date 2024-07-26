import { useContext, useEffect } from "react";
import EmployeesContext from "../../contexts/EmployeesContext";
import SortableTable from "../../components/table/SortableTable/SortableTable";
import { Heading, TableContainer } from "./EmployeeList.styled";
import { config } from "../../utils/TableConfig";

function EmployeeList() {
  const { employees, getEmployees, isLoading } = useContext(EmployeesContext);

  useEffect(() => {
    getEmployees();
  }, []);

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

export default EmployeeList;
