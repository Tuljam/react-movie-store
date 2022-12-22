import { FavoritePageIcon, HomePageIcon, SettingsPageIcon, TrendPageIcon } from "assets";
import { Search } from "components/Search/Search";
import { UserProfile } from "components/UserProfile/UserProfile";
import { useInput } from "hooks";

import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <HeaderStyled>
      <Search {...search} />
      <UserProfile name="Happy" lastName="NewYear" />
    </HeaderStyled>
  );
};
