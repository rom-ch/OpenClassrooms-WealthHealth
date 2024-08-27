import styled, { css } from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledPagination = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid var(--color-green-600);
  border-radius: 0.2rem;
  cursor: pointer;
  width: 30px;

  ${props =>
    props.$active &&
    css`
      background-color: var(--color-green-600);
      color: white;
    `}

  &:hover {
    background-color: var(--color-green-600);
    color: white;
  }

  @media ${device.tablet} {
    font-size: 14px;
    width: auto;
  }
`;
