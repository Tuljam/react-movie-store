import styled from "styled-components";
import { Color } from "ui";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns: 300px 1fr;

  grid-template-areas:
    "aside header"
    "aside outlet";
  min-height: 150vh;
  padding: 20px 15px;
`;

export const Outlet = styled.div`
  grid-area: outlet;
`;
