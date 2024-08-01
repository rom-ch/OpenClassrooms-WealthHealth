import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { IconWrapper, Message } from "./FormSuccessMessage.styled";
import { FaPlus, FaListUl, FaCheck } from "react-icons/fa6";

function FormSuccessMessage() {
  return (
    <>
      <IconWrapper>
        <FaCheck />
      </IconWrapper>
      <Message>Employee Added !</Message>
      <Button as={Link} to="/" size="normal">
        <FaPlus />
        <span>Add new employee</span>
      </Button>
      <Button as={Link} to="/employee-list" size="normal">
        <FaListUl />
        <span>Go to employee list</span>
      </Button>
    </>
  );
}

export default FormSuccessMessage;
