import { AppStyled } from "appWrapp";
import { MainSection, SideBar } from "components";
import { useInput } from "hooks";
import React, { useEffect, useState } from "react";
import { modificatMovies, moviesApi } from "servises";
import { useAppDispatch } from "store";
import { IMovie } from "types";

export const FavoritesPage = () => {
  return <AppStyled>favorite</AppStyled>;
};
