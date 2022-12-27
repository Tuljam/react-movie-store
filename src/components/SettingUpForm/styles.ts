import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, typography } from "ui";

export const SettingUpFormStyled = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-row-gap: 15px;
  width: 70%;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 15px;
  background-color: ${Color.Secondary};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.Primary_TEXT};
  &::placeholder {
    color: ${Color.White};
  }
  &:hover {
    cursor: pointer;
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

export const Title = styled.h2`
  padding: 10px 0;
  ${typography.h2};
  color: ${Color.Primary_TEXT};
`;

export const CustomLink = styled(Link)`
  ${typography.b};
  color: ${Color.Secondary};
  text-decoration: none;
`;

export const Error = styled.span`
  ${typography.b};
  color: ${Color.Errors};
`;
export const Refer = styled.a`
  ${typography.b};
`;
