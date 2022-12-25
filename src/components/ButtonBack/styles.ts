import styled from "styled-components";
import { Color, typography } from "ui";

export const ButtonStyled = styled.button`
  background: ${Color.Primary};
  border: none;
  outline: none;
  cursor: pointer;
  ${typography.s2};
`;
