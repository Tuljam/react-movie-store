import { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { moviesAPI } from "./servises/MoviesApi";
import { IFilm } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  // API
  console.log(moviesAPI.getFilm(""));

  // const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    //получим все страны
    // moviesAPI.getAll().then(setCountries);
    // получим страны по региону
    //   moviesAPI.getCountriesByRegion("Oceania").then(setCountries);
  }, []);

  // console.log(moviesAPI.getFilm("  ")); //-нет ключа,как его добавить

  // const [movies, setMovies] = useState<IFilm[]>([]);

  // useEffect(() => {
  //   moviesAPI.getFilm("ocean").then(setMovies);
  // }, []);

  // theme

  const [theme, setTheme] = useState<ThemeType>("dark");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <div>
      App
      <Nav /> <button onClick={handleTheme}>Theme</button>
      {/* <ul>
        {countries.map((c) => (
          <li>
            {c.region}
            {c.subregion}
            {c.area}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
