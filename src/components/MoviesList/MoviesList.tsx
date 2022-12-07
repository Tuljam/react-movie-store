import React from "react";
import { IMovie } from "../../types";
import { MovieCard } from "../MovieCard/MovieCard";
interface IProps {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: IProps) => {
  return (
    <ul>
      {movies.map(({ id, title, poster }) => (
        <MovieCard key={id} id={id} title={title} img={poster}></MovieCard>
      ))}
    </ul>
  );
};
