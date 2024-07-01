import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Row from "./Row";
import { departments } from "../utils/departments";

function CompanyForm({ startDate, department, updateFields }) {
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
    </FormWrapper>
  );
}

CompanyForm.propTypes = {
  startDate: PropTypes.string,
  department: PropTypes.string,
  updateFields: PropTypes.func,
};

export default CompanyForm;
