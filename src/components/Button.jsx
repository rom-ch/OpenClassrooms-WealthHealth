import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  width: 120px;
  border: none;
  background-color: var(--color-green-600);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:focus,
  &:active {
    background-color: var(--color-green-500);
  }
`;

export default Button;
