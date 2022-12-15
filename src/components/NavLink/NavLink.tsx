import React from "react";
import { Icon, NavLinkStyled, Text } from "./styles";
import homeIcon from "../../assets/icons/homeIcons.svg";
import trendIcon from "../../assets/icons/trendIcons.svg";
import favoriteIcon from "../../assets/icons/favoriteIcons.svg";
import settingsIcon from "../../assets/icons/settingIcons.svg";

export const NavLink = () => {
  return (
    <NavLinkStyled href="#">
      <Icon src={homeIcon} alt="Home" />
      <Text>Home</Text>
      <Icon src={trendIcon} alt="Trend" />
      <Text>Trends</Text>
      <Icon src={favoriteIcon} alt="Favorites" />
      <Text>Favorites</Text>
      <Icon src={settingsIcon} alt="Settings" />
      <Text>Settings</Text>
    </NavLinkStyled>
  );
};
