import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledStepper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

export const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  &:not(:first-child)::before {
    content: "";
    background-color: var(--color-grey-400);
    width: 100%;
    height: 3px;
    position: absolute;
    right: 50%;
    top: 19px;

    @media ${device.mobileL} {
      top: 15px;
    }
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    font-style: italic;

    @media ${device.mobileL} {
      font-size: 0.8rem;
    }
  }
`;

export const Step = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green-600);
  z-index: 10;
  border-radius: 50%;
  font-weight: 500;
  color: white;
  margin-bottom: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  background-color: ${props =>
    props.$currentStepIndex === props.$i + 1
      ? "var(--color-green-400)"
      : "var(--color-green-600)"};

  @media ${device.mobileL} {
    width: 2rem;
    height: 2rem;
  }
`;
