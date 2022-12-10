import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Media } from "../../ui";

import { NavStyled, SubTitleStyled, TextStyled, TitleStyled } from "./styles";

export const Nav = () => {
  const { name, email, isAuth } = useSelector((state: any) => state.user);
  return (
    <NavStyled>
      <TitleStyled>Имя:{name}</TitleStyled>
      <SubTitleStyled>Email: {email}</SubTitleStyled>
      <TextStyled>
        {" "}
        {isAuth ? <span>Logged</span> : <span>Not logged in</span>}
      </TextStyled>
    </NavStyled>
  );
};
