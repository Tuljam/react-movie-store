import { css } from "styled-components";
import { Color } from "./colors";

export const darkTheme = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Black};
`;

export const lightTheme = css`
  --primary-text: ${Color.Black};
  --primary-bg: ${Color.White};
`;
