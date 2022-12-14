import React from "react";
import { useInput } from "../../hooks";
import { Search } from "../Search/Search";
import { UserProfile } from "../UserProfile/UserProfile";
import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <HeaderStyled>
      <Search {...search} />
      <UserProfile name="Happy" lastName="NewYear" />
    </HeaderStyled>
  );
};
