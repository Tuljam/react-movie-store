import axios from "axios";
import { IFilmInfoAPI, ISearch } from "../types/types";

export interface ICountry {
  region: string;
  subregion: string;
  area: number;
}
class MoviesApi {
  private readonly BASE_URL = "https://restcountries.com/v3.1/";
  // private readonly BASE_URL = process.env.REACT_APP_BASE_URL_COUNTRIES; //ПОЧЕМУ НЕ РАБОТАЕТ????

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    // params: {
    //   apikey: this.keyAPI,
    // },
  });

  //

  private readonly ENDPOINT = {
    all: "all",
    region: "region",
    subregion: "subregion",
  };

  public async getAll() {
    const params = {
      fields: ["region", "subregion", "area"].join(","),
    };

    const { data } = await this.API.get<ICountry[]>(this.ENDPOINT.all, {
      params,
    });

    return data;
  }

  public async getCountriesByRegion(region: string) {
    const params = {
      fields: ["region", "subregion", "area"].join(","),
    };
    const { data } = await this.API.get<ICountry[]>(
      `${this.ENDPOINT.region}/${region}`,
      { params }
    );

    return data;
  }
}
export const moviesAPI = new MoviesApi();
