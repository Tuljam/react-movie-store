import styled from "styled-components";
import { Color } from "../../ui";

export const NavLinkStyled = styled.a`
  display: grid;
  grid-template-columns: 40px 95px;
  gap: 25px 0;
  /* padding-left: 65px; */
  padding-right: 106px;
`;
export const Text = styled.p`
  padding: 5px;
  color: ${Color.Primary_light};
  font-size: 20px;
  text-align: start;
`;

export const Icon = styled.img`
  align-self: center;
`;
