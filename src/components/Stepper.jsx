import styled from "styled-components";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

const StyledStepper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45rem;
`;

const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;

  &:not(:first-child)::before {
    content: "";
    background-color: var(--color-grey-400);
    width: 100%;
    height: 3px;
    position: absolute;
    right: 50%;
    top: 19px;
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    font-style: italic;
  }
`;

const Step = styled.div`
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
`;

function Stepper({ currentStepIndex }) {
  const steps = ["Employee Details", "Address", "Company Infos"];

  return (
    <>
      <StyledStepper>
        {steps.map((step, i) => (
          <StepItem key={i}>
            <Step $i={i} $currentStepIndex={currentStepIndex + 1}>
              {i < currentStepIndex ? <FaCheck /> : i + 1}
            </Step>
            <p>{step}</p>
          </StepItem>
        ))}
      </StyledStepper>
    </>
  );
}

Stepper.propTypes = {
  currentStepIndex: PropTypes.number,
};

export default Stepper;
