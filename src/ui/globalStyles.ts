import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};
#root {
  width: 1920px;
  min-height: 100vh;

}
html {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  }
html[theme="dark"] {
  ${darkTheme}
}
html[theme="light"] {
  ${lightTheme}
}
  
body {
   background: ${Color.Primary_BG};
}
`;
