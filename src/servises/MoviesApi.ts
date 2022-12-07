import axios from "axios";
import { IDataAPI, IMovieInfoAPI } from "../types/types";

class MoviesApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMovies(id: string) {
    const params = {
      t: "ocean",
      y: "2018",
      plot: "full",
    };
    const { data } = await this.API.get<IMovieInfoAPI[]>("", { params });
    return data;
  }

  public async getSearchMovies(name: string, type: string, year?: number) {
    const params = {
      s: name,
      type: type,
      y: year,
    };
    const { data } = await this.API.get<IDataAPI>("", { params });
    return data;
  }
}

export const moviesApi = new MoviesApi();
