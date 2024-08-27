import styled from "styled-components";
import { device } from "../../../styles/responsive";

export const StyledMultiStepForm = styled.div`
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid var(--color-green-600);
  padding: 2.5rem 1.5rem;
  border-radius: 0.6rem;
  max-width: 700px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 600px;
  max-width: 600px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$isFirstStep ? "flex-end" : "space-between"};
`;
