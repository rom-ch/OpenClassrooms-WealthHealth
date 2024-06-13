import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledSidebar = styled.aside`
  padding: 2rem 1.5rem;
  border-right: 1px solid #f3f4f6;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <Nav />
    </StyledSidebar>
  );
}

export default Sidebar;
