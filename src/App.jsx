import { EmployeesProvider } from "./contexts/EmployeesContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/ui/AppLayout/AppLayout";

function App() {
  return (
    <EmployeesProvider>
      <GlobalStyles />
      <AppLayout />
    </EmployeesProvider>
  );
}

export default App;
