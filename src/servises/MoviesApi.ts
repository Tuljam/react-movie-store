import axios from "axios";
import { IFilmInfoAPI, ISearch } from "../types/types";

// export interface ICountry {
//   region: string;
//   subregion: string;
//   area: number;
// }
export class MoviesApi {
  private readonly BASE_URL = "https://www.omdbapi.com/";
  //private readonly BASE_URL = "http://www.omdbapi.com/?apikey=9adb2a81&s=ocean";
  //private readonly BASE_URL = "https://restcountries.com/v3.1/";

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getFilm(id: string) {
    const params = {
      i: id,
      t: "title",
      plot: "full",
    };
    const { data } = await this.API.get<IFilmInfoAPI>("", { params });
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

// private readonly ENDPOINT = {
//   all: "all",
//   region: "region",
//   subregion: "subregion",
// };

// public async getAll() {
//   const params = {
//     fields: ["region", "subregion", "area"].join(","),
//   };

//   const { data } = await this.API.get<ICountry[]>(this.ENDPOINT.all, {
//     params,
//   });

//   return data;
// }

// public async getCountriesByRegion(region: string) {
//   const params = {
//     fields: ["region", "subregion", "area"].join(","),
//   };
//   const { data } = await this.API.get<ICountry[]>(
//     `${this.ENDPOINT.region}/${region}`,
//     { params }
//   );

//   return data;
// }

export const moviesAPI = new MoviesApi();
