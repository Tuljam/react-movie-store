import { Search } from "components";
import { UserProfile } from "components/UserProfile/UserProfile";
import { useInput } from "hooks";
import { HeaderStyled } from "./styles";

export const Header = () => {
  const search = useInput;
  return (
    <HeaderStyled>
      <Search {...search} />
      <UserProfile name="Happy" lastName="NewYear" />
    </HeaderStyled>
  );
};
