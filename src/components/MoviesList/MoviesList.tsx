import React from "react";
import { IMovie } from "../../types";
import { MovieCard } from "../MovieCard/MovieCard";
interface IProps {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: IProps) => {
  return (
    <ul>
      {movies.map(({ imdbID, title, poster }) => (
        <MovieCard
          key={imdbID}
          id={imdbID}
          title={title}
          img={poster}
        ></MovieCard>
      ))}
    </ul>
  );
};
