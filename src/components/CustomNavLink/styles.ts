import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color, typography } from "ui";

export const NavLinkStyled = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  ${typography.s1}
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Graphite}`)};
  &:hover {
    color: ${Color.Primary};
  }
`;
