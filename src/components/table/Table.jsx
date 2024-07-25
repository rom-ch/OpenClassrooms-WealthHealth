import PropTypes, { object } from "prop-types";
import { FaRoad, FaCity, FaMap } from "react-icons/fa6";
import { TbSquareLetterZFilled } from "react-icons/tb";
import styled from "styled-components";

const TableSection = styled.section`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Tr = styled.div`
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

const Th = styled.div`
  flex: 1;
  background-color: var(--color-green-600);
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 1rem;
`;

const Td = styled.div`
  flex: 1;
  padding: 1rem;
  border-right: 1px solid var(--color-grey-300);
`;

const AddressContent = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms 250ms;
  border-top: 1px solid var(--color-grey-300);
  background-color: white;
`;

const Address = styled.div`
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
`;

const AddressLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const RowsContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  gap: "1rem";
  border: 1px solid var(--color-grey-300);

  & > div:nth-of-type(even) {
    background-color: var(--color-grey-200);
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin: 1rem 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 1rem;
`;

function Table({ data, config }) {
  const renderedHeaders = config.map(column => {
    return column.showRow && <Th key={column.label}>{column.label}</Th>;
  });

  const renderedRows = data.map(rowData => {
    const renderedCells = config.map(column => {
      return (
        column.showRow && <Td key={column.label}>{column.render(rowData)}</Td>
      );
    });

    return (
      <Tr key={rowData.id}>
        <div style={{ display: "flex" }}>{renderedCells}</div>
        <AddressContent>
          <Address>
            <FlexColumn>
              <FlexRow>
                <AddressLabel>
                  <FaRoad />
                  <span> Street :</span>
                </AddressLabel>
                <span>{rowData.street}</span>
              </FlexRow>
              <FlexRow>
                <AddressLabel>
                  <FaCity />
                  <span>City :</span>
                </AddressLabel>
                <span>{rowData.city}</span>
              </FlexRow>
            </FlexColumn>
            <FlexColumn>
              <FlexRow>
                <AddressLabel>
                  <FaMap />
                  <span>State :</span>
                </AddressLabel>
                <span>{rowData.state}</span>
              </FlexRow>
              <FlexRow>
                <AddressLabel>
                  <TbSquareLetterZFilled />
                  <span>Zip Code :</span>
                </AddressLabel>
                <span>{rowData.zip}</span>
              </FlexRow>
            </FlexColumn>
          </Address>
        </AddressContent>
      </Tr>
    );
  });

  return (
    <TableSection>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {renderedHeaders}
      </div>

      <RowsContainer>{renderedRows}</RowsContainer>
    </TableSection>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(object),
  config: PropTypes.arrayOf(object),
};

export default Table;
