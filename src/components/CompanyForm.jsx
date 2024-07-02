import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Row from "./Row";
import ErrorMessage from "./ErrorMessage";
import { departments } from "../utils/departments";

function CompanyForm({ startDate, department, updateFields, errors }) {
  return (
    <FormWrapper title="Company Details">
      <Row>
        <InputField
          type="date"
          placeholder="Start Date"
          label="Start Date"
          required
          value={startDate}
          onChange={updateFields}
          fieldName="startDate"
        />
        <Dropdown
          options={departments}
          label="Department"
          fieldName="department"
          value={department}
          onChange={updateFields}
        />
      </Row>
      {errors.department && <ErrorMessage>{errors.department}</ErrorMessage>}
    </FormWrapper>
  );
}

CompanyForm.propTypes = {
  startDate: PropTypes.string,
  department: PropTypes.string,
  updateFields: PropTypes.func,
  errors: PropTypes.object,
};

export default CompanyForm;
