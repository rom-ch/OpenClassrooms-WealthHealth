import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Row from "./Row";
import { states } from "../utils/states";

function AddressForm({ street, city, state, zip, updateFields }) {
  return (
    <FormWrapper title="Address">
      <Row>
        <InputField
          placeholder="Street"
          label="Street"
          autoFocus={true}
          required
          value={street}
          onChange={updateFields}
          fieldName="street"
        />
        <InputField
          placeholder="City"
          label="City"
          required
          value={city}
          onChange={updateFields}
          fieldName="city"
        />
      </Row>
      <Row>
        <Dropdown
          options={states}
          label="State"
          fieldName="state"
          value={state}
          onChange={updateFields}
        />
        <InputField
          placeholder="Zip"
          label="Zip"
          required
          value={zip}
          onChange={updateFields}
          fieldName="zip"
        />
      </Row>
    </FormWrapper>
  );
}

AddressForm.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  updateFields: PropTypes.func,
};

export default AddressForm;
