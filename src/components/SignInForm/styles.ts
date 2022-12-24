import styled from "styled-components";
import { Color, Media, typography } from "ui";

export const FormStyled = styled.form`
  /* background-color: ; */

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 10px;
  ${Media.Mobile} {
    padding: 24px;
    gap: 32px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${Media.Mobile} {
    gap: 20px;
  }
`;

export const Input = styled.input`
  padding: 16px;
  padding-left: 20px;
  background-color: ${Color.Secondary};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.Primary_TEXT};
  &::placeholder {
    color: ${Color.Secondary};
  }
  &:focus {
    border-color: ${Color.Primary};
  }
  &:disabled {
    background-color: ${Color.Secondary};
    &::placeholder {
      color: ${Color.Light};
    }
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${typography.s2};
  color: ${Color.Primary_TEXT};
`;
