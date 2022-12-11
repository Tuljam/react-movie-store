import { useEffect, useState } from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Nav } from "./components/Nav/Nav";
import { Search } from "./components/Search/Search";
import { useInput } from "./hooks/useInput";
import { moviesApi } from "./servises";
import { modificationMovies } from "./servises/mappers/modificationMovies";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { getUser } from "./store/selectors/useeSelectors";
import { setUserName, toggleAuth } from "./store/slices/userSlice";

import { IMovie } from "./types";

type ThemeType = "dark" | "light";

export const App = () => {
  const { name, email, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleAuth = () => {
    dispatch(toggleAuth());
  };

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
      .getSearchMovies("ocean", "movie", "Document")
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
      <Search {...search} />
      <Nav />
      <button onClick={handleTheme}>Theme</button>

      <button onClick={handleAuth}>toggle Auth</button>
      <MoviesList movies={movies} />
    </div>
  );
};
