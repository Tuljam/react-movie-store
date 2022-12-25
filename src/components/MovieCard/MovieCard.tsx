import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MovieCardStyled, Title, SubTitle, Image } from "./styles";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  return (
    <MovieCardStyled key={movie.imdbID}>
      <Image src={movie.poster} alt={movie.title} />{" "}
      {/* <Title>
        {movie.title}, {movie.year}{" "}
      </Title> */}
      <Link to={generatePath(ROUTE.DETAILS, { name: movie.title })}>
        {movie.title}, {movie.year}{" "}
      </Link>
      <SubTitle>{movie.genre}</SubTitle>{" "}
    </MovieCardStyled>
  );
};
