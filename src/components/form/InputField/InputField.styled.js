import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledInputField = styled.div`
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: ${props => (props.$width === "full" ? "100%" : "230px")};

  @media ${device.tablet} {
    max-width: 100%;
    margin-top: 0.5rem;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--color-grey-400);
  outline: 0;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  @media ${device.mobileL} {
    font-size: 14px;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 3px;
    border-color: var(--color-green-600);
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: var(--color-green-500);
    font-weight: 500;
    font-size: 14px;

    @media ${device.tablet} {
      font-size: 12px;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--color-grey-500);
  pointer-events: none;
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
