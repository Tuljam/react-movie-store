import React, { useEffect, useState } from "react";
import { useInput } from "../../hooks";
import { moviesApi } from "../../servises";
import { modificatMovies } from "../../servises/mappers/modificatMovies";
import { useAppDispatch } from "../../store";
import { IMovie } from "../../types";
import { Header } from "../Header/Header";
import { MoviesList } from "../MoviesList/MoviesList";

export const MainPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const search = useInput();
  const dispatch = useAppDispatch(); // нужно ли здесь??

  useEffect(() => {
    moviesApi
      .getSearchMovies("ocean")
      .then((moviesList) => {
        const modificatedMovies = modificatMovies(moviesList);
        return modificatedMovies;
      })
      .then(setMovies);
  }, []);
  return (
    <div>
      <Header />
      <MoviesList movies={movies} />
    </div>
  );
};
