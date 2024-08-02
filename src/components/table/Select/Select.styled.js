import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 11em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.6em 0.5em;
  border-radius: 0.25em;
  outline: none;
  font-size: 0.8em;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:focus {
    border-color: hsl(200, 100%, 20%);
  }
`;

export const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;

export const Caret = styled.div`
  border: 0.25em solid transparent;
  border-top-color: #777;
  cursor: pointer;
`;

export const OptionsList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: 100;

  display: ${props => (props.$isOpen ? "block" : "none")};
`;

export const Option = styled.li`
  font-size: 0.8rem;
  padding: 0.25em 0.5em;
  cursor: pointer;

  ${props => props.$isOptionSelected && Selected}
  ${props => props.$isHighlighted && Highlighted}
`;

export const Selected = css`
  background-color: var(--color-green-600);
  color: white;
`;

export const Highlighted = css`
  background-color: hsla(72, 88%, 30%, 0.2);
`;

export const Value = styled.span`
  flex-grow: 1;
  cursor: pointer;
`;
