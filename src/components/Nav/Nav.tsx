import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Media } from "../../ui";
import { NavLink } from "../NavLink/NavLink";

import { NavStyled, SubTitle, Text, Title } from "./styles";

export const Nav = () => {
  const { name, email, isAuth } = useSelector((state: any) => state.user);
  return (
    // <NavStyled>
    //   <Title>Имя:{name}</Title>
    //   <SubTitle>Email: {email}</SubTitle>
    //   <Text>{isAuth ? <span>Logged</span> : <span>Not logged in</span>}</Text>
    // </NavStyled>

    <NavStyled>
      <NavLink />
    </NavStyled>
  );
};
