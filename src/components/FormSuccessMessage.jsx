import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaPlus, FaListUl, FaCheck } from "react-icons/fa6";

const IconWrapper = styled.div`
  background-color: var(--color-green-500);
  padding: 1rem;
  border-radius: 50%;

  & svg {
    font-size: 4rem;
    color: white;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
`;

function FormSuccessMessage() {
  return (
    <>
      <IconWrapper>
        <FaCheck />
      </IconWrapper>
      <Message>Employee Added !</Message>
      <Button as={Link} to="/">
        <FaPlus />
        <span>Add new employee</span>
      </Button>
      <Button as={Link} to="/employee-list">
        <FaListUl />
        <span>Go to employee list</span>
      </Button>
    </>
  );
}

export default FormSuccessMessage;
