import { useState } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import EmployeeForm from "./EmployeeForm";
import AddressForm from "./AddressForm";
import CompanyForm from "./CompanyForm";
import Stepper from "../components/Stepper";
import styled from "styled-components";
import Button from "./Button";
import { isValidDate, isValidZip } from "../utils/helpers";
import { FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa6";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  startDate: "",
  department: "",
};

const StyledMultiStepForm = styled.div`
  padding: "2rem";
  margin: "1rem";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$isFirstStep ? "flex-end" : "space-between"};
`;

function MultiStepForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({
    zip: "",
    dateOfBirth: "",
    state: "",
    department: "",
  });
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <EmployeeForm
        {...data}
        updateFields={updateFields}
        key="1"
        errors={errors}
      />,
      <AddressForm
        {...data}
        updateFields={updateFields}
        key="2"
        errors={errors}
      />,
      <CompanyForm
        {...data}
        updateFields={updateFields}
        key="3"
        errors={errors}
      />,
    ]);

  function updateFields(fieldName, value) {
    setData(prev => {
      return { ...prev, [fieldName]: value };
    });
  }

  function validateFields(stepIndex) {
    const newErrors = {
      dateOfBirth: "",
      state: "",
      zip: "",
      department: "",
    };

    if (stepIndex === 0) {
      newErrors.dateOfBirth = isValidDate(data.dateOfBirth);
    }

    if (stepIndex === 1) {
      newErrors.state = data.state ? "" : "State is required";
      newErrors.zip = isValidZip(data.zip);
    }

    if (stepIndex === 2) {
      newErrors.department = data.department ? "" : "Department is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === "");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validateFields(currentStepIndex)) return;

    if (!isLastStep) return next();
    alert("Successful Account Creation");
    console.log(data);
  }

  return (
    <StyledMultiStepForm>
      <Stepper currentStepIndex={currentStepIndex} />
      <Form onSubmit={onSubmit}>
        {step}

        <ButtonWrapper $isFirstStep={isFirstStep}>
          {!isFirstStep && (
            <Button type="button" onClick={back}>
              <FaArrowLeft />
              <span>Back</span>
            </Button>
          )}
          <Button type="submit">
            <span>{isLastStep ? "Finish" : "Next"}</span>
            {isLastStep ? <FaCheck /> : <FaArrowRight />}
          </Button>
        </ButtonWrapper>
      </Form>
    </StyledMultiStepForm>
  );
}

export default MultiStepForm;
