import styled from "styled-components";
import { Color } from "ui";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr;

  grid-template-columns: 300px 1fr;

  grid-template-areas:
    "aside header"
    "aside outlet";
  min-height: 100vh;
  /* width: 1920px; */
  background: ${Color.Primary_BG};
`;

export const Outlet = styled.div`
  grid-area: outlet;
`;
