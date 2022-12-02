import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};

html {
  font-family: 'Exo 2', sans-serif;
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

export const AppWrapper = styled.div`
  // color: ;
  // background-color: ;

  padding: 60px;
  padding-top: 40px;
  display: flex;
  gap: 146px;
`;
