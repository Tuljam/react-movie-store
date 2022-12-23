import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router";
import { MainTemplateStyled } from "./styles";

export const MainTemplate = () => {
  return (
    <MainTemplateStyled>
      <Header />
      <Outlet />
      <SideBar />
    </MainTemplateStyled>
  );
};
