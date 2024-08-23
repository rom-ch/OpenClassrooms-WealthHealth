import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledHeader = styled.header`
  padding: 1rem 2rem 0;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 0.5rem;
  }

  h1 {
    color: var(--color-green-900);
    text-transform: uppercase;

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
`;
