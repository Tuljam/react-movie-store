import { useEffect, useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Nav } from "./components/Nav/Nav";
import { Search } from "./components/Search/Search";
import { useInput } from "./hooks/useInput";
import { moviesApi } from "./servises";
import { modificationMovies } from "./servises/mappers/modificationMovies";

import { IMovie } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  // API

  // поиск по ID
  // const [movies, setMovies] = useState<IMovie>();

  // useEffect(() => {
  //   moviesApi.getMovies("id").then((movies) => {
  //     console.log(movies);
  //     setMovies(movies as any);
  //   });
  // }, []);

  const [movies, setMovies] = useState<IMovie[]>([]);
  const search = useInput();
  useEffect(() => {
    moviesApi
      .getSearchMovies("ocean", "movie")
      .then((data) => {
        console.log(data);
        return modificationMovies(data.Search);
      })
      .then(setMovies);
  }, []);

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
      <Search {...search} />
      {/* <Nav /> <button onClick={handleTheme}>Theme</button> */}
      {/* <MoviesList movies={movies} /> */}
    </div>
  );
};
