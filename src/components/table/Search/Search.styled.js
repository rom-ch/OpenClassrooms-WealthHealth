import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: none;
  transition: all 0.3s ease;
  border: 1px solid var(--color-green-900);
  border-radius: 0.25em;
  background-color: white;

  ${props =>
    props.$active &&
    css`
      border-radius: 0.25em 0 0 0.25em;
    `}
`;

export const SearchLabel = styled.label`
  margin: 0;
  padding: 0.6em;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: -1px;
`;

export const SearchInput = styled.input`
  display: block;
  flex-grow: 1;
  font-family: inherit;
  border: 0;
  padding: 0.6em 0em;
  line-height: 1.55;
  border-radius: 0 0.25em 0.25em 0;
  transition: all 0.3s ease;
  width: 0;
  border: 0;
  background-color: hsla(72, 88%, 30%, 0.2);

  ${props =>
    props.$active &&
    css`
      width: 180px;
      border: 1px solid var(--color-green-900);
      border-left: 0;
      padding-left: 1rem;
    `}

  &::placeholder {
    color: var(--color-grey-500);
    letter-spacing: 1px;
  }

  &:focus {
    outline: none;
  }
`;
