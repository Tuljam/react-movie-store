import { IMovie, IMovieDetailsAPI } from "types";

export const transformMovies = (movies: IMovieDetailsAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID, Genre }) => ({
    imdbID: imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    genre: Genre,
  }));
