import PropTypes from "prop-types";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { IoPersonAddSharp } from "react-icons/io5";
import FormModal from "../../form/FormModal/FormModal";
import MultiStepForm from "../../form/MultiStepForm/MultiStepForm";

function Header({ isFormOpen, setIsFormOpen }) {
  return (
    <StyledHeader>
      <Logo />
      <h1>Wealth Health</h1>
      <Button variant="primary" onClick={() => setIsFormOpen(true)}>
        <IoPersonAddSharp />
        Add Employee
      </Button>
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <MultiStepForm onCloseModal={() => setIsFormOpen(false)} />
      </FormModal>
    </StyledHeader>
  );
}

Header.propTypes = {
  isFormOpen: PropTypes.bool,
  setIsFormOpen: PropTypes.func,
};

export default Header;
