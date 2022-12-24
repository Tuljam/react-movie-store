import styled from "styled-components";
import { Color, typography } from "ui";
export const ButtonStyled = styled.button<{
  widthBtn?: string;
  bgColor?: string;
  brColor?: string;
  colorBtn?: string;
}>`
  width: ${({ widthBtn }) => widthBtn || "100%"};
  padding: 15px;
  border-radius: 10px;
  background: ${({ bgColor }) => bgColor || Color.Primary};
  ${typography.b};

  color: ${({ colorBtn }) => colorBtn || Color.White};
  border: ${({ brColor }) => `1px solid ${brColor}` || "none"};

  transition: all 0.3s ease-out;
  &:hover {
    cursor: pointer;
    color: ${Color.Black};
  }
`;
