import { useState } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import EmployeeForm from "./EmployeeForm";
import AddressForm from "./AddressForm";
import CompanyForm from "./CompanyForm";

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

function Stepper() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <EmployeeForm {...data} updateFields={updateFields} key="1" />,
      <AddressForm {...data} updateFields={updateFields} key="2" />,
      <CompanyForm {...data} updateFields={updateFields} key="3" />,
    ]);

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
    console.log(data);
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default Stepper;
