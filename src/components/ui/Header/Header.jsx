import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { IoPersonAddSharp } from "react-icons/io5";
import { useState } from "react";
import FormModal from "../../form/FormModal/FormModal";
import MultiStepForm from "../../form/MultiStepForm/MultiStepForm";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledHeader>
      <Logo />
      <h1>Wealth Health</h1>
      <Button variant="primary" onClick={() => setIsOpenModal(true)}>
        <IoPersonAddSharp />
        Add New Employee
      </Button>
      <FormModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <MultiStepForm />
      </FormModal>
    </StyledHeader>
  );
}

export default Header;
