export interface IMovie {
  title: string;
  year: string;
  // imdbID: string;
  id: string;
  type: string;
  poster: string;
}
export interface IMovieAPI {
  Title: string;
  Year: string;
  // imdbID: string;
  id: string;
  Type: string;
  Poster: string;
}
export interface IMovieInfoAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  // imdbID: string;
  id: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IDataAPI {
  Search: IMovieAPI[];
  result: string;
  Response: string;
}
