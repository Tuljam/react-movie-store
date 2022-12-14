import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Media } from "../../ui";
import homeIcon from "../../assets/icons/homeIcons.svg";
import trendIcon from "../../assets/icons/trendIcons.svg";
import favoriteIcon from "../../assets/icons/favoriteIcons.svg";
import settingsIcon from "../../assets/icons/settingIcons.svg";

import { Icon, NavStyled, SubTitle, Text, Title } from "./styles";

export const Nav = () => {
  const { name, email, isAuth } = useSelector((state: any) => state.user);
  return (
    // <NavStyled>
    //   <Title>Имя:{name}</Title>
    //   <SubTitle>Email: {email}</SubTitle>
    //   <Text>{isAuth ? <span>Logged</span> : <span>Not logged in</span>}</Text>
    // </NavStyled>

    <NavStyled>
      <a href="#">
        <Icon src={homeIcon} alt="Home" />
        <Text>Home</Text>{" "}
      </a>
      <a href="#">
        <Icon src={trendIcon} alt="Trend" />
        <Text>Trends</Text>
      </a>
      <a href="#">
        <Icon src={favoriteIcon} alt="Favorites" />
        <Text>Favorites</Text>
      </a>
      <a href="#">
        <Icon src={settingsIcon} alt="Settings" />
        <Text>Settings</Text>
      </a>
    </NavStyled>
  );
};
