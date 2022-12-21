import { AppStyled } from "appWrapp";
import { MainSection, SideBar } from "components";
import React from "react";

export const HomePage = () => {
  return (
    <AppStyled>
      <SideBar />
      <MainSection />
    </AppStyled>
  );
};
