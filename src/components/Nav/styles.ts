import styled from "styled-components";
import { Color } from "../../ui";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 200px;
  background-color: ${Color.Errors};
`;

export const BlockStyled = styled.div`
  align-items: center;
  width: 80%;
  height: 33%;

  background-color: ${Color.Orange};
`;

export const Block2Styled = styled.div`
  align-items: center;
  width: 80%;
  height: 33%;

  background-color: ${Color.Yellow};
`;
