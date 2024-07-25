import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
import { StyledStepper, StepItem, Step } from "./Stepper.styled";

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
