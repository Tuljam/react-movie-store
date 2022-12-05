import React from "react";
import { IMovie } from "../../types";
interface IProps {
  movies: IMovie[];
}
export const MovieList = ({ movies }: IProps) => {
  return (
    <ul>
      {movies.map(({ imdbID, Title, Poster }) => (
        <li key={imdbID} id={imdbID} title={Title}></li>
        //<li  ></li>
      ))}
    </ul>
  );
};
