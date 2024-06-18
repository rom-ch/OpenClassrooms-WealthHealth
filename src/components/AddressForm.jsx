import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import { states } from "../utils/states";

function AddressForm({ street, city, state, zip, updateFields }) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <select
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      >
        {states.map(state => (
          <option key={state.abbreviation}>{state.name}</option>
        ))}
      </select>
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
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
