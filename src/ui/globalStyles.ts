import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
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
