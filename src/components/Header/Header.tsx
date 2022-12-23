import { Search } from "components/Search/Search";
import { UserProfile } from "components/UserProfile/UserProfile";
import { useInput } from "hooks";
import { LogoIcon } from "assets";
import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <HeaderStyled>
      {/* <LogoIcon /> */}
      <Search {...search} />
      <UserProfile name="Happy" lastName="NewYear" />
    </HeaderStyled>
  );
};
