import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
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
      <Link to="">
        {" "}
        <HomePageIcon />
        <p>home</p>
      </Link>
      <Link to="">
        {" "}
        <TrendPageIcon />
        <p>Trends</p>
      </Link>
      <Link to="">
        {" "}
        <FavoritePageIcon />
        <p>Favorites</p>
      </Link>
      <Link to="">
        {" "}
        <SettingsPageIcon />
        <p>Settindg</p>
      </Link>

      {/* <NavLink to={ROUTE.HOME}>
      
      </NavLink>
      <NavLink to={ROUTE.FAVORITES}>
        <FavoritePageIcon />
        <p>favorites</p>
      </NavLink>
      <NavLink to={ROUTE.TRENDS}>
        <TrendPageIcon />
        <p>Trends</p>
      </NavLink>
      <NavLink to={ROUTE.SETTINGS}>
        <SettingsPageIcon />
        <p>Settindg</p>
      </NavLink> */}

      {/* <CustomNavLink to={ROUTE.HOME}>
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
      </CustomNavLink> */}

      <ButtonTheme onClick={handleTheme}>Theme</ButtonTheme>
    </NavStyled>
  );
};
