import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
