import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { NavLinkStyled, Text } from "./styles";

export const NavLink = () => {
  return (
    <NavLinkStyled href="#">
      <HomePageIcon />
      <Text>Home</Text>
      <TrendPageIcon />
      <Text>Trends</Text>
      <FavoritePageIcon />
      <Text>Favorites</Text>
      <SettingsPageIcon />
      <Text>Settings</Text>
    </NavLinkStyled>
  );
};
