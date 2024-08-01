import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-self: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0);
`;
