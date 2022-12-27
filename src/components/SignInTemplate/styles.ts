import styled from "styled-components";
import { Color } from "ui";

export const SignInTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 80px;
  width: 60%;

  background: ${Color.Orange};
  /* background: url("../../assets/images/signin-bg.png"), no-repeat; */
  background-size: cover;
`;
