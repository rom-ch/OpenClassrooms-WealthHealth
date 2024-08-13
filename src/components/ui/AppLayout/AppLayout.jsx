import Header from "../Header/Header";
import { StyledAppLayout, Main } from "./AppLayout.styled";
import EmployeeList from "../../../pages/EmployeeList/EmployeeList";

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <EmployeeList />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
