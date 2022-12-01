import React from "react";
import { Block2Styled, BlockStyled, NavStyled } from "./styles";

export const Nav = () => {
  return (
    <NavStyled>
      {" "}
      nav
      <BlockStyled>block</BlockStyled>
      <Block2Styled>block</Block2Styled>
    </NavStyled>
  );
};
