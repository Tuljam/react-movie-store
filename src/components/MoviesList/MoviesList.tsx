import React from "react";
import { IMovie } from "../../types";
import { MovieCard } from "../MovieCard/MovieCard";
interface IProps {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: IProps) => {
  return (
    <ul>
      {movies.map(({ i, t, poster }) => (
        <MovieCard key={i} id={i} title={t} img={poster}></MovieCard>
      ))}
    </ul>
  );
};
