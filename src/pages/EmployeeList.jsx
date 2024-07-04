import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

function EmployeeList() {
  const [employeesList, setEmployeesList] = useState([]);

  const employeesCollection = collection(db, "employees");

  useEffect(() => {
    const getEmployeesList = async () => {
      try {
        const data = await getDocs(employeesCollection);
        const filteredData = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getEmployeesList();
  }, [employeesCollection]);

  return <div>Employee List</div>;
}

export default EmployeeList;
