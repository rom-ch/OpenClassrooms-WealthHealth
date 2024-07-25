import PropTypes from "prop-types";
import { Heading } from "./FormWrapper.styled";

function FormWrapper({ title, children }) {
  return (
    <>
      <Heading>{title}</Heading>
      <div>{children}</div>
    </>
  );
}

FormWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FormWrapper;
