import { useContext, useEffect } from "react";
import EmployeesContext from "../contexts/EmployeesContext";

function EmployeeList() {
  const { employees, getEmployeesList, isLoading } =
    useContext(EmployeesContext);

  useEffect(() => {
    getEmployeesList();
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {employees.map(employee => (
        <div key={employee.id} style={{ display: "flex", gap: "1rem" }}>
          <div>{employee.firstName}</div>
          <div>{employee.lastName}</div>
          <div>{employee.dateOfBirth}</div>
          <div>{employee.department}</div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
