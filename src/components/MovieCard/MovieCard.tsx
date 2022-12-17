import { IMovie } from "types";
import { MovieCardStyled, Title, SubTitle, Image } from "./styles";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  return (
    <MovieCardStyled>
      <Image src={movie.poster} alt={movie.title} />{" "}
      <Title>
        {movie.title}, {movie.year}{" "}
      </Title>
      <SubTitle>{movie.genre}</SubTitle>{" "}
    </MovieCardStyled>
  );
};
