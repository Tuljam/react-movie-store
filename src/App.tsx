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
  const search = useInput();

  useEffect(() => {
    moviesAPI.getSearchByFilms("ocean", "movie").then(setMovies);
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
      {/* <Nav /> <button onClick={handleTheme}>Theme</button> */}
      <MoviesList movies={movies} />
    </div>
  );
};
