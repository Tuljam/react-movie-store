import React from "react";
import { IMovie, IMovieAPI } from "../../types";

export const modificationMovies = (movies: IMovieAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID, Genre }) => ({
    imdbID: imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    genre: Genre,
  }));
