import { Logo } from "assets";
import { Nav } from "components/Nav/Nav";
import { SideBarStyled, Copyright } from "./styles";

export const SideBar = () => {
  return (
    <SideBarStyled>
      <Logo />
      <Nav />
      <Copyright>© All Rights Reserved</Copyright>
    </SideBarStyled>
  );
};
