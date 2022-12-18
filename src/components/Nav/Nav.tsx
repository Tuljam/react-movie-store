import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ButtonTheme, NavLink, NavStyled, Text } from "./styles";

type ThemeType = "dark" | "light";
export const Nav = () => {
  const { name, email, isAuth } = useSelector((state: any) => state.user);

  // theme

  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    // <NavStyled>
    //   <Title>Имя:{name}</Title>
    //   <SubTitle>Email: {email}</SubTitle>
    //   <Text>{isAuth ? <span>Logged</span> : <span>Not logged in</span>}</Text>
    // </NavStyled>

    <NavStyled>
      <NavLink href="">
        <HomePageIcon />
        <Text>Home</Text>
      </NavLink>
      <NavLink href="">
        <TrendPageIcon />
        <Text>Trends</Text>
      </NavLink>
      <NavLink href="">
        <FavoritePageIcon />
        <Text>Favorites</Text>
      </NavLink>
      <NavLink href="">
        <SettingsPageIcon />
        <Text>Settings</Text>
      </NavLink>
      <ButtonTheme onClick={handleTheme}>Theme</ButtonTheme>
    </NavStyled>
  );
};
