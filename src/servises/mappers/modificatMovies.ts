import React from "react";
import { IMovie, IMovieFactsAPI } from "../../types";

export const modificatMovies = (movies: IMovieFactsAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID, Genre }) => ({
    imdbID: imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    genre: Genre,
  }));