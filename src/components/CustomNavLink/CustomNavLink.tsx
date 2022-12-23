import { ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { NavLinkStyled } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProps) => {
  const isActive = useMatch(to);
  return (
    <NavLinkStyled $isActive={isActive} to={to}>
      {children}
    </NavLinkStyled>
  );
};
