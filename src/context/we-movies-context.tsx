import { createContext, useContext, useState } from "react";
import { MoviesObject, WeMoviesContex, WeMoviesContexProviderProps } from "./types";

const WeMoviesContext = createContext<WeMoviesContex | null>(null);

export default function WeMoviesContextProvider({ children }: WeMoviesContexProviderProps) {
  const [movies, setMovies] = useState<MoviesObject[]>([]);

  return (
    <WeMoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </WeMoviesContext.Provider>
  );
}

export function useWeMoviesContex() {
  const context = useContext(WeMoviesContext);
  if (!context) {
    throw new Error(
      'useWeMoviesContex must be used within a WeMoviesContexProvider'
    );
  }
  return context;
}
