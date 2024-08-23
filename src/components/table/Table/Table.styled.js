import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const TableSection = styled.section`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow-x: auto;
`;

export const Tr = styled.div`
  display: "flex";
  flex-direction: "column";
  gap: "1rem";
  cursor: pointer;

  &:hover {
    background-color: hsla(72, 88%, 30%, 0.2) !important;
  }

  &:hover div {
    grid-template-rows: 1fr;
  }
`;

export const Th = styled.div`
  flex: 1;
  background-color: var(--color-green-600);
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 1rem;
  min-width: 110px;

  @media ${device.laptop} {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const Td = styled.div`
  flex: 1;
  padding: 1rem;
  border-right: 1px solid var(--color-grey-300);
  min-width: 110px;

  @media ${device.tablet} {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const AddressContent = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms 250ms;
  border-top: 1px solid var(--color-grey-300);
  background-color: white;
`;

export const Address = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;

  svg {
    font-size: 1.5rem;
    color: var(--color-green-600);
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const AddressLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media ${device.tablet} {
    & span {
      font-size: 0.8rem;
    }
  }
`;

export const RowsContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  gap: 1rem;
  border: 1px solid var(--color-grey-300);

  & > div:nth-of-type(even) {
    background-color: var(--color-grey-200);
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin: 1rem 1rem;

  @media ${device.tablet} {
    margin: 0.5rem;
    gap: 0.3rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 1rem;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
