import styled from "styled-components";
import { Color } from "ui";
// import bg from "./images/signin-bg.png";

export const SignInTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  width: 60%;

  background: ${Color.Orange};
  /* background-image: url($), no-repeat; // */
  background-size: cover;
`;
