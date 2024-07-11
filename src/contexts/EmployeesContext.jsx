import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { db } from "../firebase-config";
import { getDocs, addDoc, collection } from "firebase/firestore";

const EmployeesContext = createContext();

function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const employeesCollection = collection(db, "employees");

  const getEmployeesList = async () => {
    try {
      setIsloading(true);
      const data = await getDocs(employeesCollection);
      const filteredData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmployees(filteredData);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addEmployee = async employee => {
    try {
      const docRef = await addDoc(employeesCollection, employee);
      return docRef;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EmployeesContext.Provider
      value={{ getEmployeesList, addEmployee, employees, isLoading }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

EmployeesProvider.propTypes = {
  children: PropTypes.node,
};

export default EmployeesContext;
export { EmployeesProvider };
