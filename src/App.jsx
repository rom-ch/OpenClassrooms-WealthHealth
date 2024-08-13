import { EmployeesProvider } from "./contexts/EmployeesContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/ui/AppLayout/AppLayout";

// function App() {
//   return (
//     <EmployeesProvider>
//       <BrowserRouter>
//         <GlobalStyles />
//         <Routes>
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate to="add-employee" />} />
//             <Route path="/add-employee" element={<AddEmployee />} />
//             <Route path="/employee-list" element={<EmployeeList />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </EmployeesProvider>
//   );
// }

function App() {
  return (
    <EmployeesProvider>
      <GlobalStyles />
      <AppLayout />
    </EmployeesProvider>
  );
}

export default App;
