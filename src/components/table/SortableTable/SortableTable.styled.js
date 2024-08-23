import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-self: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemsNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 0.9rem;

    @media ${device.mobileL} {
      font-size: 0.8rem;
    }
  }
`;
