import styled from "styled-components";
import { Color } from "../../ui";
import { Media } from "../../ui/media";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 200px;
  background-color: ${Color.Primary_BG};
`;

export const Title = styled.h3`
  color: ${Color.Primary_TEXT};
  font-size: 26px;

  ${Media.Tablet} {
    color: ${Color.Green};
  }
`;
export const SubTitle = styled.h4`
  color: ${Color.Primary_TEXT};
  font-size: 20px;

  ${Media.Tablet} {
    color: ${Color.Errors};
  }
`;
export const Text = styled.p`
  padding: 5px;
  color: ${Color.Primary_light};
  font-size: 20px;
`;
