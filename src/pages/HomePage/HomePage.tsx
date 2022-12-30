import { MoviesList } from "components";
import { title } from "process";
import { useEffect, useState } from "react";
import { getAllMovies, useAppDispatch, useAppSelector } from "store";
import { fetchAllMovies } from "store/feature/moviesCardSlice/movieCardsSlice";
import { HomePageStyled } from "./styles";

export const HomePage = () => {
  const [params, setParams] = useState(title);
  const { movies, isLoading } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies(params));
  }, [dispatch, params]);

  return (
    <HomePageStyled>
      <MoviesList movies={movies} isLoading={isLoading} />

      <div>
        <button type="button">Show more</button>
      </div>
    </HomePageStyled>
  );
};
