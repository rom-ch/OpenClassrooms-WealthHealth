import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EmployeesProvider } from "./contexts/EmployeesContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <EmployeesProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="add-employee" />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmployeesProvider>
  );
}

export default App;
