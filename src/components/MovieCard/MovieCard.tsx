import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MovieCardStyled, SubTitle, Image, TitleGgoup } from "./styles";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  const { poster, title, year, genre } = movie;
  return (
    <MovieCardStyled key={movie.imdbID}>
      <Image src={poster} alt={title} />{" "}
      <TitleGgoup>
        <Link to={generatePath(ROUTE.DETAILS, { name: title })}>
          {title}, {year}{" "}
        </Link>
        <SubTitle>{genre}</SubTitle>{" "}
      </TitleGgoup>
    </MovieCardStyled>
  );
};
