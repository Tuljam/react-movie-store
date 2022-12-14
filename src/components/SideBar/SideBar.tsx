import React from "react";
import { Nav } from "../Nav/Nav";
import { Copyright, Logo, SideBarStyled } from "./styles";
import logo from "../../assets/icon/logo.png";

export const SideBar = () => {
  return (
    <SideBarStyled>
      <Logo src={logo} alt="Logo" />
      <Nav />
      <Copyright>© All Rights Reserved</Copyright>
    </SideBarStyled>
  );
};
