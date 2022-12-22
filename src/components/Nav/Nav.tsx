import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { CustomNavLink } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ROUTE } from "router";
import { ButtonTheme, NavStyled, Text } from "./styles";

type ThemeType = "dark" | "light";

export const Nav = () => {
  // theme

  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <NavStyled>
      <CustomNavLink to={ROUTE.HOME}>
        <HomePageIcon />
        <p>home</p>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <FavoritePageIcon />
        <p>favorites</p>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>
        <TrendPageIcon />
        <p>Trends</p>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>
        <SettingsPageIcon />
        <p>Settindg</p>
      </CustomNavLink>

      <ButtonTheme onClick={handleTheme}>Theme</ButtonTheme>
    </NavStyled>
  );
};
