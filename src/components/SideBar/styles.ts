import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const SideBarStyled = styled.aside`
  display: grid;
  grid-area: aside;
  grid-template-rows: 0.5fr 3fr 0.5fr;
  padding: 48px 100px 5px 40px;
  align-items: start;
  text-align: start;
  background-color: ${Color.Black};

  ${Media.Tablet} {
    display: none;
  }
  ${Media.Mobile} {
    display: none;
  }
`;

export const LogoIcon = styled.img`
  width: 160px;
  height: 40px;
  align-items: center;
  padding: 50px;

  ${Media.Mobile} {
    width: 147px;
    height: 38px;
  }
`;
export const Copyright = styled.p`
  align-self: center;
  ${typography.b};
  color: ${Color.Light};
`;
