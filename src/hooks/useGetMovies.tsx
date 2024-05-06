import { useEffect } from "react";
import { useWeMoviesContex } from "../context/we-movies-context";

export function useGetMovies() {
  const { movies, setMovies } = useWeMoviesContex();

  useEffect(() => {
    document.getElementById("load-spinner-id")?.setAttribute("style", "display:block;");

    fetch("https://wefit-movies.vercel.app/api/movies")
      .then((response) => response.json())
      .catch((err) => {
        setMovies([])
        console.error(err)
      })
      .then((data) => {
        setMovies(data.products);
      })
      .finally(() =>
        document
          .getElementById("load-spinner-id")
          ?.setAttribute("style", "display:none;")
      );
  }, []);

  return movies;
}
