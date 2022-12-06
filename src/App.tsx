import { useEffect, useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Nav } from "./components/Nav/Nav";
import { useInput } from "./hooks/useInput";
import { moviesApi } from "./servises";

import { IMovie } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  // API

  const [movies, setMovies] = useState<IMovie>();

  useEffect(() => {
    moviesApi.getMovies("id").then((movies) => {
      console.log(movies);
      setMovies(movies as any);
    });
  }, []);

  console.log(moviesApi);
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
      {/* <Nav /> <button onClick={handleTheme}>Theme</button> */}
      {/* <MoviesList movies={movies} /> */}
    </div>
  );
};
