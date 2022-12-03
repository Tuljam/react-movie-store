import { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { MoviesApi, moviesAPI } from "./servises/MoviesApi";

type ThemeType = "dark" | "light";

export const App = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    moviesAPI.getFilm("").then(setMovies);
  }, [movies]);

  console.log(moviesAPI.getFilm("  ")); //-нет ключа,как его добавить

  // theme
  const [theme, setTheme] = useState<ThemeType>("dark");
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <div>
      App
      <Nav />
      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
      <button onClick={handleTheme}>Theme</button>
    </div>
  );
};

// interface IMovie {

//  title: string,
//   year: number,
//   id: number,
// // }
// export const App = () => {
//   const [movies, setMovies] = useState<any>();

//   useEffect(() => {
//     fetch("https://www.omdbapi.com/?apikey=9adb2a81&s=MEN")
//       .then((data) => data.json())
//       .then(setMovies);
//     //.then((json) => console.log(json));
//   }, []);

//   return (
//     <div>
//       App1
//       <p>Список</p>
//       <ul>
//         {movies.map((movie: any) => {
//           return <li>{movie.title}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };
