import { MovieCard } from "components/MovieCard/MovieCard";
import { IMovie } from "types";
import { ListStyled } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
}
export const MoviesList = ({ movies }: IProps) => {
  return (
    <ListStyled>
      {movies?.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </ListStyled>
  );
};

// export const MoviesList = () => {
//   const [movies, setMovies] = useState<IMovie[]>([]);

//   useEffect(() => {
//     moviesApi
//       .getSearchMovies("ocean")
//       .then((moviesList) => {
//         const modificatedMovies = transformMovies(moviesList);
//         return modificatedMovies;
//       })
//       .then(setMovies);
//   }, []);
//   return (
//     <ListStyled>
//       {movies.map((movie) => (
//         <MovieCard movie={movie}></MovieCard>
//       ))}
//     </ListStyled>
//   );
// };
