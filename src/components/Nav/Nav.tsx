import { useEffect, useState } from "react";
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
    </NavStyled>
  );
};
