import { useEffect, useState } from "react";
import { AppStyled } from "./appWrapp";
import { SideBar } from "./components";
import { MainPage } from "./components/MainPage/MainPage";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Nav } from "./components/Nav/Nav";
import { Search } from "./components/Search/Search";
import { useInput } from "./hooks/useInput";
import { moviesApi } from "./servises";
import { modificatMovies } from "./servises/mappers/modificatMovies";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { getUser } from "./store/selectors/useSelectors";
import { setUserName, toggleAuth } from "./store/slices/userSlice";

type ThemeType = "dark" | "light";

export const App = () => {
  // theme

  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  // user
  const { name, email, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleAuth = () => {
    dispatch(toggleAuth());
  };

  // API

  // поиск по ID
  // const [movies, setMovies] = useState<IMovie[]>([]);

  // useEffect(() => {
  //   moviesApi.getMoviesById("id").then((movies) => {
  //     console.log(movies);
  //     setMovies(movies as any);
  //   });
  // }, []);

  // поиск по фильмам

  // const [movies, setMovies] = useState<IMovie[]>([]);
  // const search = useInput();

  // useEffect(() => {
  //   moviesApi
  //     .getSearchMovies("ocean")
  //     .then((moviesList) => {
  //       const modificatedMovies = modificatMovies(moviesList);
  //       return modificatedMovies;
  //     })
  //     .then(setMovies);
  // }, []);

  return (
    <AppStyled>
      <SideBar />
      <MainPage />
      <button onClick={handleTheme}>Theme</button>
      <button onClick={handleAuth}>toggle Auth</button>
    </AppStyled>
  );
};
