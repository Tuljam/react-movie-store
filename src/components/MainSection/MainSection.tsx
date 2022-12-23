import { Header } from "components/Header/Header";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { moviesApi } from "servises";
import { modificatMovies } from "servises/mappers/modificatMovies";
import { IMovie } from "types";
import { MainSectionStyled } from "./styles";

export const MainSection = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  // const search = useInput();
  // const dispatch = useAppDispatch(); // нужно ли здесь??

  useEffect(() => {
    moviesApi
      .getSearchMovies("ocean")
      .then((moviesList) => {
        const modificatedMovies = modificatMovies(moviesList);
        return modificatedMovies;
      })
      .then(setMovies);
  }, []);
  return (
    <MainSectionStyled>
      <Header />
      <MoviesList movies={movies} />
    </MainSectionStyled>
  );
};
