import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { Dialog, CloseIcon, DialogContent } from "./FormModal.styled";
import { useEffect, useRef } from "react";

function FormModal({ children, isOpen, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return createPortal(
    <Dialog onCancel={onClose} ref={dialogRef}>
      <CloseIcon onClick={onClose}>
        <FiX />
      </CloseIcon>
      <DialogContent>{children}</DialogContent>
    </Dialog>,
    document.getElementById("modal")
  );
}

FormModal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default FormModal;
