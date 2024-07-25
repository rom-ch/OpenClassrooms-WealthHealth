import PropTypes, { object } from "prop-types";
import { FaRoad, FaCity, FaMap } from "react-icons/fa6";
import { TbSquareLetterZFilled } from "react-icons/tb";
import {
  Tr,
  Td,
  Th,
  AddressContent,
  Address,
  FlexColumn,
  FlexRow,
  AddressLabel,
  TableSection,
  RowsContainer,
} from "./Table.styled";

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
