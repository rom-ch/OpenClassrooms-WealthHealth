import PropTypes from "prop-types";

function FormWrapper({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}

FormWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default FormWrapper;
