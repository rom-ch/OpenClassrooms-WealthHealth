import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";

function EmployeeForm({ firstName, lastName, dateOfBirth, updateFields }) {
  return (
    <FormWrapper title="Employee Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Date of Birth</label>
      <input
        required
        type="date"
        value={dateOfBirth}
        onChange={e => updateFields({ dateOfBirth: e.target.value })}
      />
    </FormWrapper>
  );
}

EmployeeForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  updateFields: PropTypes.func,
};

export default EmployeeForm;
