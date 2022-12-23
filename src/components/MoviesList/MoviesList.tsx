import { MovieCard } from "components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { modificatMovies, moviesApi } from "servises";
import { IMovie } from "types";
import { ListStyled } from "./styles";

export const MoviesList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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
    <ListStyled>
      {movies.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </ListStyled>
  );
};
