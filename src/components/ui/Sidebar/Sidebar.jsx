import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { StyledSidebar } from "./SideBar.styled";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <Nav />
    </StyledSidebar>
  );
}

export default Sidebar;
