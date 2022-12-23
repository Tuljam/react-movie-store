import { MoviesList } from "components";
import { MainTemplateStyled } from "components/MainTemplate/styles";
import React from "react";

export const HomePage = () => {
  return (
    <MainTemplateStyled>
      <MoviesList />
    </MainTemplateStyled>
  );
};
