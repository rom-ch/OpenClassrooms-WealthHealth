import styled from "styled-components";

export const StyledMultiStepForm = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid var(--color-green-600);
  padding: 2.5rem 1.5rem;
  border-radius: 0.6rem;
  max-width: 700px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 600px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$isFirstStep ? "flex-end" : "space-between"};
`;
