// export interface IMovie {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

export interface IMovie {
  t: string;
  y: string;
  i: string;
  type: string;
  poster: string;
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
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface ISearch {
  Search: IMovie[];
}
