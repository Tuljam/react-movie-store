import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router";

export const MainTemplate = () => {
  return (
    <div>
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
};
