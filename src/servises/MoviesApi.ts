import axios from "axios";
import { IFilmInfoAPI } from "../types/types";

export class MoviesApi {
  private readonly BASE_URL = "https://www.omdbapi.com/";

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  async getFilm(id: string) {
    const params = {
      id: id,
      plot: "full",
    };

    const { data } = await this.API.get<IFilmInfoAPI>("", { params });

    return data;
  }
}

export const moviesAPI = new MoviesApi();
