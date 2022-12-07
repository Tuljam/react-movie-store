import React from "react";
import { IMovie, IMovieAPI } from "../../types";

export const modificationMovies = (movies: IMovieAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, id }) => ({
    // imdbID,
    id,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }));
