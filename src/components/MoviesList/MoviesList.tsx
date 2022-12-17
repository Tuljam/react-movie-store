import { MovieCard } from "components/MovieCard/MovieCard";
import { IMovie } from "types";
import { ListStyled } from "./styles";
interface IProps {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: IProps) => {
  return (
    <ListStyled>
      {movies.map(({ imdbID, title, year, poster, genre }) => (
        <MovieCard
          key={imdbID}
          id={imdbID}
          title={title}
          year={year}
          img={poster}
          genre={genre}
        ></MovieCard>
      ))}
    </ListStyled>
  );
};
