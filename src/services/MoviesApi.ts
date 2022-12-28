import axios from "axios";
import { IMovieFactsAPI, ResponseAPI } from "../types/types";

class MoviesApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMoviesById(id: string) {
    const params = {
      i: id,
      plot: "full",
    };
    const { data } = await this.API.get<IMovieFactsAPI>("", { params });
    return data;
  }

  public async getSearchMovies(keyword: string) {
    const { data } = await this.API.get<ResponseAPI>("", {
      params: { s: keyword },
    });

    return data;
  }
}
//   public async getSearchMovies(keyword: string): Promise<IMovieFactsAPI[]> {
//     const { data } = await this.API.get<ResponseAPI>("", {
//       params: { s: keyword },
//     });
//     if (data.Response === "False") {
//       return [];
//     }

//     const moviesIds = data.Search.map((movie) => movie.imdbID);
//     return Promise.all(moviesIds.map((id) => this.getMoviesById(id)));
//   }
// }

export const moviesApi = new MoviesApi();
