import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import InputField from "./InputField";
import Row from "./Row";

function EmployeeForm({
  firstName,
  lastName,
  dateOfBirth,
  updateFields,
  errors,
}) {
  return (
    <FormWrapper title="Employee Details">
      <Row>
        <InputField
          placeholder="First Name"
          label="First Name"
          autoFocus={true}
          required
          value={firstName}
          onChange={updateFields}
          fieldName="firstName"
          error={errors.firstName}
        />
        <InputField
          placeholder="Last Name"
          label="Last Name"
          required
          value={lastName}
          onChange={updateFields}
          fieldName="lastName"
          error={errors.lastName}
        />
      </Row>
      <Row>
        <InputField
          type="date"
          placeholder="Date of Birth"
          label="date of Birth"
          required
          value={dateOfBirth}
          onChange={updateFields}
          fieldName="dateOfBirth"
          error={errors.dateOfBirth}
        />
      </Row>
    </FormWrapper>
  );
}

EmployeeForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  updateFields: PropTypes.func,
  errors: PropTypes.object,
};

export default EmployeeForm;
