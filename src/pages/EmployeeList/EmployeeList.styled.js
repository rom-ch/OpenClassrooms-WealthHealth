import styled from "styled-components";
import { device } from "../../styles/responsive";

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-green-800);

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  margin: 0 auto;
`;
