import { css } from "styled-components";
import { Color } from "./colors";

export const H1 = css`
  // font-family: "Exo 2"; - установить нужный
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.Graphite};

  @media (max-weight: 568px) {
    font-size: 32px;
    line-height: 48px;
  }
`;
