import React from "react";
import { useInput } from "../../hooks";
import { Search } from "../Search/Search";
import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <HeaderStyled>
      <Search {...search} />
    </HeaderStyled>
  );
};
