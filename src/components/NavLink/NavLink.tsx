import React from "react";
import { Icon, NavLinkStyled, Text } from "./styles";
import homeIcon from "../../assets/icons/homepage-icons.svg";
import trendIcon from "../../assets/icons/trendpage-icons.svg";
import favoriteIcon from "../../assets/icons/favoritepage-icons.svg";
import settingsIcon from "../../assets/icons/settingpage-icons.svg";

export const NavLink = () => {
  return (
    <NavLinkStyled href="#">
      <Icon src={homeIcon} alt="Home page icon" />
      <Text>Home</Text>
      <Icon src={trendIcon} alt="Trend page icon" />
      <Text>Trends</Text>
      <Icon src={favoriteIcon} alt="Favorites page icon" />
      <Text>Favorites</Text>
      <Icon src={settingsIcon} alt="Settings page icon" />
      <Text>Settings</Text>
    </NavLinkStyled>
  );
};
