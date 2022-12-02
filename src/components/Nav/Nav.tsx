import { useEffect, useState } from "react";
import { Media } from "../../ui";

import { Block2Styled, BlockStyled, NavStyled, TitleStyled } from "./styles";

type ThemeType = "dark" | "light";

export const Nav = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <NavStyled>
      {" "}
      nav
      <BlockStyled>
        <TitleStyled>block</TitleStyled>
        <button onClick={handleTheme}>Theme</button>
      </BlockStyled>
      {/* <Block2Styled>
        <h1>block</h1> */}
      {/* </Block2Styled> */}
    </NavStyled>
  );
};
