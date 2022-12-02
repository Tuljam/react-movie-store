import { css } from "styled-components";
import { Color } from "./colors";

export const darkTheme = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Black};
`;

export const lightTheme = css`
  --primary-text: ${Color.Dark};
  --primary-bg: ${Color.White};
`;
