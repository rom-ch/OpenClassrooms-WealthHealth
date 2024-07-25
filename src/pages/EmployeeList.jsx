import { useContext, useEffect } from "react";
import EmployeesContext from "../contexts/EmployeesContext";
import SortableTable from "../components/table/SortableTable";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-green-800);
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
`;

function EmployeeList() {
  const { employees, getEmployees, isLoading } = useContext(EmployeesContext);

  useEffect(() => {
    getEmployees();
  }, []);

  const config = [
    {
      label: "First Name",
      render: employee => employee.firstName,
      sortValue: employee => employee.firstName,
      showRow: true,
    },
    {
      label: "Last Name",
      render: employee => employee.lastName,
      sortValue: employee => employee.lastName,
      showRow: true,
    },
    {
      label: "Department",
      render: employee => employee.department,
      sortValue: employee => employee.department,
      showRow: true,
    },
    {
      label: "Date of Birth",
      render: employee => employee.dateOfBirth,
      sortValue: employee => employee.dateOfBirth,
      showRow: true,
    },
    {
      label: "Start Date",
      render: employee => employee.startDate,
      sortValue: employee => employee.startDate,
      showRow: true,
    },
    {
      label: "City",
      render: employee => employee.city,
      sortValue: employee => employee.city,
    },
    {
      label: "Street",
      render: employee => employee.street,
      sortValue: employee => employee.street,
    },
    {
      label: "State",
      render: employee => employee.state,
      sortValue: employee => employee.state,
    },
    {
      label: "Zip",
      render: employee => employee.zip,
      sortValue: employee => employee.zip,
    },
  ];

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
