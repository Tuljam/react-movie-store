import { useEffect, useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Nav } from "./components/Nav/Nav";
import { useInput } from "./hooks/useInput";
import { moviesAPI } from "./servises/MoviesApi";
import { IMovie } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  // API
  const [movies, setMovies] = useState<IMovie[]>([]);
  console.log(moviesAPI.getFilm("Title"));

  useEffect(() => {
    moviesAPI.getSearchByFilms("sun", "movie").then(setMovies);
  }, []);
  console.log(moviesAPI.getSearchByFilms("sun", "movie"));
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
      <MoviesList movies={movies} />
    </div>
  );
};
