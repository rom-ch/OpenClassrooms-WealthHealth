import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const Dialog = styled.dialog`
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 0.5rem;
  z-index: 1000;

  &::backdrop {
    background-color: hsl(0, 0%, 0%, 0.5);
    backdrop-filter: blur(4px);
  }

  @media ${device.tablet} {
    padding: 2rem 1rem 1rem;
    width: 100%;
  }
`;

export const CloseIcon = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: var(--color-grey-400);
  font-size: 1.6rem;

  & svg {
    cursor: pointer;

    &:hover {
      color: var(--color-grey-600);
    }
  }
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
