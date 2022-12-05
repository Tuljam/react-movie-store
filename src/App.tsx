import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import { Nav } from "./components/Nav/Nav";
import { moviesAPI } from "./servises/MoviesApi";
import { IMovie } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  // API
  const [movies, setMovies] = useState<IMovie[]>([]);
  console.log(moviesAPI.getFilm("Title"));
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
      <MovieList movies={movies} />
      {/* <Nav /> <button onClick={handleTheme}>Theme</button> */}
      <ul>
        {movies.map((m) => (
          <li>{m.Title}</li>
        ))}
      </ul>
    </div>
  );
};
