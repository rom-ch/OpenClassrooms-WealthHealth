import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

function Button({
  children,
  variant = "primary",
  size = "normal",
  full,
  outline,
  ...rest
}) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $full={full}
      $outline={outline}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  full: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
