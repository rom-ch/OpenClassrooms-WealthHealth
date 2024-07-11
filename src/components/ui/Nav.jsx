import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiMiniUserPlus, HiListBullet } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #4b5563;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #1f2937;
    background-color: #f9fafb;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #9ca3af;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #5A6F07;
  }
`;

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
