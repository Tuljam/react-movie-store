import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const NavLinkStyled = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};
  &:hover {
    color: ${Color.Primary};
  }
`;
