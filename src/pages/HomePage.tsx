import { MainSection, SideBar } from "components";
import { MainTemplateStyled } from "components/MainTemplate/styles";
import React from "react";

export const HomePage = () => {
  return (
    <MainTemplateStyled>
      <SideBar />
      <MainSection />
    </MainTemplateStyled>
  );
};
