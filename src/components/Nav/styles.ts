import styled from "styled-components";
import { Color } from "../../ui";
import { Media } from "../../ui/media";

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

export const TitleStyled = styled.h1`
  color: ${Color.White};
  font-size: 26px;

  ${Media.Tablet} {
    color: ${Color.Green};
  }
`;
