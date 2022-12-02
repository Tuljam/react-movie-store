import React from "react";
import styled from "styled-components";
import { Media } from "../../ui";

import { Block2Styled, BlockStyled, NavStyled, TitleStyled } from "./styles";

export const Nav = () => {
  return (
    <NavStyled>
      {" "}
      nav
      <BlockStyled>
        <TitleStyled>block</TitleStyled>
      </BlockStyled>
      <Block2Styled>
        <h1>block</h1>
      </Block2Styled>
    </NavStyled>
  );
};
