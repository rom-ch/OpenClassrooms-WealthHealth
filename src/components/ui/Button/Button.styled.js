import styled, { css } from "styled-components";

const variantStyles = {
  primary: {
    color: "var(--color-green-600)",
    styles: css`
      background-color: var(--color-green-600);
      border: 2px solid var(--color-green-600);
      color: white;

      &:hover {
        background-color: hsla(72, 88%, 30%, 0.95);
      }

      &:focus {
        box-shadow: 0 0 0 3px hsla(72, 88%, 30%, 0.4);
      }
    `,
  },
  success: {
    color: "var(--color-success)",
    styles: css`
      background-color: var(--color-success);
      border: 2px solid var(--color-success);
      color: white;

      &:hover {
        background-color: hsla(120, 39%, 54%, 0.9);
      }

      &:focus {
        box-shadow: 0 0 0 3px hsla(120, 39%, 54%, 0.4);
      }
    `,
  },
  warning: {
    color: "var(--color-warning)",
    styles: css`
      background-color: var(--color-warning);
      border: 2px solid var(--color-warning);
      color: white;

      &:hover {
        background-color: hsla(35, 84%, 62%, 0.9);
      }

      &:focus {
        box-shadow: 0 0 0 3px hsla(35, 84%, 62%, 0.4);
      }
    `,
  },
  danger: {
    color: "var(--color-danger)",
    styles: css`
      background-color: var(--color-danger);
      border: 2px solid var(--color-danger);
      color: white;

      &:hover {
        background-color: hsla(2, 64%, 58%, 0.9);
      }

      &:focus {
        box-shadow: 0 0 0 3px hsla(2, 64%, 58%, 0.4);
      }
    `,
  },
  info: {
    color: "var(--color-info)",
    styles: css`
      background-color: var(--color-info);
      border: 2px solid var(--color-info);
      color: white;

      &:hover {
        background-color: hsla(194, 66%, 61%, 0.9);
      }

      &:focus {
        box-shadow: 0 0 0 3px hsla(194, 66%, 61%, 0.4);
      }
    `,
  },
};

const sizeStyle = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 4px;
  `,
  normal: css`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
  `,
  large: css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 8px;
  `,
};

export const StyledButton = styled.button`
  border: 0;
  min-width: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 250ms, background-color 350ms;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  ${props => variantStyles[props.$variant].styles}
  ${props => sizeStyle[props.$size]}

  ${props =>
    props.$full &&
    css`
      width: 100%;
    `}

    ${props =>
    props.$outline &&
    css`
      background-color: transparent;
      color: ${variantStyles[props.$variant].color};

      &:hover {
        color: white;
        background-color: ${variantStyles[props.$variant].color};
      }
    `}
`;
