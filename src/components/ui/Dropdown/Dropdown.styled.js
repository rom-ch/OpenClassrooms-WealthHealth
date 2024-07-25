import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const StyledDropdown = styled.div`
  position: relative;
  margin: 20px 0;
  width: 230px;
`;

export const InputControl = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-bottom: 2px solid var(--color-grey-400);

  &:focus {
    border-color: var(--color-green-600);
  }

  &:focus + label {
    top: -20px;
    font-size: 12px;
    color: var(--color-green-500);
  }

  &:focus + label + span {
    width: 100%;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
`;

export const StyledFaAngleDown = styled(FaAngleDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

export const OptionList = styled.ul`
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 10;
  border: 1px solid var(--color-grey-400);
  max-height: 200px;
  overflow-y: auto;
  display: ${props => (props.$isOpen ? "block" : "none")};
`;

export const OptionItem = styled.li`
  display: block;
  cursor: pointer;
  padding: 8px 18px;

  &:hover {
    background-color: hsl(72, 88%, 23%, 0.15);
  }
`;
