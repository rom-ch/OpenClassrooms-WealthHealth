import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledAppLayout = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  padding: 2.5rem 3rem 4rem;

  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
`;
