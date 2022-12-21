import { AppStyled } from "appWrapp";
import { MainSection, SideBar } from "components";
import { useInput } from "hooks";
import React, { useEffect, useState } from "react";
import { modificatMovies, moviesApi } from "servises";
import { useAppDispatch } from "store";
import { IMovie } from "types";

export const FavoritesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const search = useInput();
  const dispatch = useAppDispatch(); // нужно ли здесь??

  useEffect(() => {
    moviesApi
      .getSearchMovies("autumn")
      .then((moviesList) => {
        const modificatedMovies = modificatMovies(moviesList);
        return modificatedMovies;
      })
      .then(setMovies);
  }, []);
  return (
    <AppStyled>
      <SideBar />
      {/* <MainSection movies={movies} /> */}
      <MainSection />
    </AppStyled>
  );
};
