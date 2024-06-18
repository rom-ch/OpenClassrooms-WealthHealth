import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import { departments } from "../utils/departments";

function CompanyForm({ startDate, department, updateFields }) {
  return (
    <FormWrapper title="Company Details">
      <label>Start Date</label>
      <input
        autoFocus
        required
        type="date"
        value={startDate}
        onChange={e => updateFields({ startDate: e.target.value })}
      />
      <label>Department</label>
      <select
        value={department}
        onChange={e => updateFields({ department: e.target.value })}
      >
        {departments.map(department => (
          <option key={department.name}>{department.name}</option>
        ))}
      </select>
    </FormWrapper>
  );
}

CompanyForm.propTypes = {
  startDate: PropTypes.string,
  department: PropTypes.string,
  updateFields: PropTypes.func,
};

export default CompanyForm;
