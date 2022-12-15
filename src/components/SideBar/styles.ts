import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const SideBarStyled = styled.aside`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  gap: 5px;
  width: 370px;
  padding-left: 65px;
  align-items: start;
  text-align: start;

  ${Media.Tablet} {
    display: none;
  }
  ${Media.Mobile} {
    display: none;
  }
`;

export const Logo = styled.img`
  /* margin: auto; */
  width: 160px;
  height: 40px;
  align-items: start;

  ${Media.Mobile} {
    width: 147px;
    height: 38px;
  }
`;
export const Copyright = styled.p`
  align-self: end;
  ${typography.b};
  color: ${Color.Light};
`;
