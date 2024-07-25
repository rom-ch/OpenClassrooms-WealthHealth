import { HiMiniUserPlus, HiListBullet } from "react-icons/hi2";
import { NavList, StyledNavLink } from "./Nav.styled";

function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="add-employee">
            <HiMiniUserPlus />
            <span>Add Employee</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="employee-list">
            <HiListBullet />
            <span>Employee List</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default Nav;
