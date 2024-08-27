import { useState } from "react";
import Header from "../Header/Header";
import { StyledAppLayout, Main } from "./AppLayout.styled";
import EmployeeList from "../../../pages/EmployeeList/EmployeeList";

function AppLayout() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Main>
        <EmployeeList isFormOpen={isFormOpen} />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
