import axios from "axios";
import { IMovieInfoAPI, ISearch } from "../types/types";

class MoviesApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getFilm(id: string) {
    const params = {
      i: id,
      t: "title",
    };
    const { data } = await this.API.get<IMovieInfoAPI>("", { params });
    return data;
  }
  public async getSearchByFilms(name: string, type: string, year?: number) {
    const params = {
      s: name,
      type: type,
      y: year,
    };
    const {
      data: { Search },
    } = await this.API.get<ISearch>("", { params });
    return Search;
  }
}
export const moviesAPI = new MoviesApi();
