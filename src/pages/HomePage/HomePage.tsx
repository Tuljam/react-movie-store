import { MoviesList } from "components";
import { HomePageStyled } from "./styles";

export const HomePage = () => {
  return (
    <HomePageStyled>
      <MoviesList movies={[]} />
    </HomePageStyled>
  );
};
