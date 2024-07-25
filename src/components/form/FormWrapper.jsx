import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
  color: var(--color-green-800);
`;

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
