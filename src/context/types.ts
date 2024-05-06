export type WeMoviesContexProviderProps = {
    children: React.ReactNode
};

export type MoviesObject = {
  id: number;
  image: string;
  price: number;
  title: string;
};

export type CartItemsObject = {
  id: number;
  count: number;
};

export type WeMoviesContex = {
  movies: MoviesObject[];
  setMovies: React.Dispatch<React.SetStateAction<MoviesObject[]>>;
};