import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};

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
  
  body{

  }`;
