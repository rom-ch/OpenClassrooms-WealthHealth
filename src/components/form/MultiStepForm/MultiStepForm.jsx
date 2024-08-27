import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Modal from "modal-library-rc";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm";
import EmployeesContext from "../../../contexts/EmployeesContext";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import AddressForm from "../AddressForm/AddressForm";
import CompanyForm from "../CompanyForm/CompanyForm";
import Stepper from "../Stepper/Stepper";
import Button from "../../ui/Button/Button";
import {
  isValidDate,
  isValidZip,
  isValidName,
} from "../../../helpers/validations";
import { FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import {
  StyledMultiStepForm,
  Form,
  ButtonWrapper,
} from "./MultiStepForm.styled";

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

function MultiStepForm({ onCloseModal }) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    dateOfBirth: "",
    state: "",
    department: "",
  });
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, reset } =
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

  const { addEmployee } = useContext(EmployeesContext);

  function updateFields(fieldName, value) {
    setData(prev => {
      return { ...prev, [fieldName]: value };
    });
  }

  function validateFields(stepIndex) {
    const newErrors = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      state: "",
      zip: "",
      department: "",
    };

    if (stepIndex === 0) {
      newErrors.firstName = isValidName(data.firstName);
      newErrors.lastName = isValidName(data.lastName);
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
    addEmployee(data);
    setIsSubmitted(true);
    setData(INITIAL_DATA);
    reset();
    onCloseModal();
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
      {isSubmitted && (
        <Modal
          type="success"
          title="Employee Added !"
          isOpen={isSubmitted}
          onClose={() => setIsSubmitted(false)}
        >
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="success"
            size="normal"
          >
            <FaListUl />
            <span>Go to employee list</span>
          </Button>
        </Modal>
      )}
    </StyledMultiStepForm>
  );
}

MultiStepForm.propTypes = {
  onCloseModal: PropTypes.func,
};

export default MultiStepForm;
