import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { Search } from "components/Search/Search";
import { UserProfile } from "components/UserProfile/UserProfile";
import { useInput } from "hooks";
import { Link, NavLink } from "react-router-dom";
import { ROUTE } from "router";

import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <HeaderStyled>
      <Search {...search} />
      <UserProfile name="Happy" lastName="NewYear" />
      <nav>
        <Link to={ROUTE.HOME}>
          <p>home</p>
        </Link>
        <Link to={ROUTE.TRENDS}>
          <p>Trends</p>
        </Link>
        <Link to={ROUTE.FAVORITES}>
          <p>Favorites</p>
        </Link>
        <Link to={ROUTE.SETTINGS}>
          <p>Settings</p>
        </Link>
      </nav>
    </HeaderStyled>
  );
};
