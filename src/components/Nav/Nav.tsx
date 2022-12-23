import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { CustomNavLink } from "components";

import { useEffect, useState } from "react";
import { ROUTE } from "router";
import { ButtonTheme, NavStyled, Subtitle } from "./styles";

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
        <Subtitle>Home</Subtitle>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>
        <TrendPageIcon />
        <Subtitle>Trends</Subtitle>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <FavoritePageIcon />
        <Subtitle>Favorites</Subtitle>
      </CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>
        <SettingsPageIcon />
        <Subtitle>Settings</Subtitle>
      </CustomNavLink>

      <ButtonTheme onClick={handleTheme}>Theme</ButtonTheme>
    </NavStyled>
  );
};
