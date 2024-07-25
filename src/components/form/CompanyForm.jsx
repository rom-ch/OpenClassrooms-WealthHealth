import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import Dropdown from "../ui/Dropdown";
import Row from "../ui/Row";
import { fetchCollection } from "../../utils/fetchCollection";

function CompanyForm({ startDate, department, updateFields, errors }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentsData = await fetchCollection("departments");
        setDepartments(departmentsData);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };

    fetchDepartments();
  }, []);

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
          error={errors.department}
        />
      </Row>
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
