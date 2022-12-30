import { Title } from "components/SignInForm/styles";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MovieCardStyled, SubTitle, Image, TitleGgoup } from "./styles";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  const { poster, title, year, genre, imdbID } = movie;
  return (
    <Link to={generatePath(ROUTE.MOVIE_CARD, { name: imdbID })}>
      <MovieCardStyled key={movie.imdbID}>
        <Image src={poster} alt={title} />{" "}
        <TitleGgoup>
          <Title>
            {" "}
            {title}, {year}
          </Title>
          <SubTitle>{genre}</SubTitle>{" "}
        </TitleGgoup>
      </MovieCardStyled>
    </Link>
  );
};
