import { MoviesObject } from "../../context/types";
import { useWeMoviesContex } from "../../context/we-movies-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import loadSpinner from "../../assets/load-spinner.png";
import refresh from "../../assets/refresh.svg";
import { Container } from "./styles";
import { CardMessage } from "../../components/CardMessage";
import { CardMovieRoot } from "../../components/CardMovie/CardMovieRoot";
import { CardMovie } from "../../components/CardMovie";
import { useReadLocalStorage } from "../../hooks/useReadLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
  const navigate = useNavigate();
  const cartItems: any = useReadLocalStorage("@cart-items");
  const { movies } = useWeMoviesContex();
  const [value, setValue]: any = useLocalStorage(
    "@cart-items",
    []
  );
  const addToCart = (movie: MoviesObject) => {
    const hasMovie = value?.findIndex((item: any) => item.id === movie.id);

    if (hasMovie !== -1) {
      value[hasMovie] = { id: movie.id, count: value[hasMovie].count + 1 };
      setValue(value);
    } else {
      setValue([...value, { id: movie.id, count: 1 }]);
    }
  };

  const { setMovies } = useWeMoviesContex();
  function getMovies() {
    document
      .getElementById("load-spinner-id")
      ?.setAttribute("style", "display:block;");

    fetch("https://wefit-movies.vercel.app/api/movies")
      .then((response) => response.json())
      .catch((err: any) => {
        console.error(err)
        setMovies([]);
      })
      .then((data) => {
        setMovies(data.products);
      })
      .finally(() =>
        document
          .getElementById("load-spinner-id")
          ?.setAttribute("style", "display:none;")
      );
  }

  useEffect(() => {
    getMovies()
  }, [])

  const cartLength = (id: number | string) => {
    const hasMovie = cartItems?.find((cartItem: any) => cartItem.id === id);
    if(hasMovie) {
      return hasMovie.count;
    } else {
      return 0
    }
  }

  return (
    <Container>
      <div id="load-spinner-id" className="load-bg-spinner">
        <img className="load-spinner" src={loadSpinner} alt="basket-logo" />
      </div>
      <button id="to-cart" style={{display: 'none'}} type="button" onClick={() => navigate("/checkout")}>cart</button>
      
      {movies.length > 0 ? (
        movies.map((movie: MoviesObject) => (
          <CardMovieRoot>
            <CardMovie.Container flexDirection="column" alignItems="center">
              <CardMovie.Image src={movie.image} width="147px" />
              <CardMovie.Description>
                <CardMovie.Title>{movie.title}</CardMovie.Title>
                <CardMovie.Price>{movie.price?.toFixed(2)}</CardMovie.Price>
              </CardMovie.Description>
              <CardMovie.Actions>
                <CardMovie.Button onClick={() => addToCart(movie)} backgroundColor={cartLength(movie.id) > 0 ? 'secondary' : 'primary'}>
                  <CardMovie.CountIcon count={cartLength(movie.id)} />
                  <CardMovie.TextButton>
                    Adicionar ao carrinho
                  </CardMovie.TextButton>
                </CardMovie.Button>
              </CardMovie.Actions>
            </CardMovie.Container>
          </CardMovieRoot>
          // <div
          //   key={movie.id}
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     gap: "5px",
          //     border: "1px solid #ccc",
          //   }}
          // >
          //   <span>{movie.id}</span>
          //   <span>{movie.image}</span>
          //   <span>{movie.price}</span>
          //   <span>{movie.title}</span>
          //   <button type="button" onClick={() => addToCart(movie)}>
          //     Add
          //   </button>
          // </div>
        ))
      ) : (
        <CardMessage.Root>
          <CardMessage.Container>
            <CardMessage.Text text="Parece que não há nada por aqui :(" />
            <CardMessage.Image src={refresh} alt="Imagem recarregar página" />
            <CardMessage.Separator />
            <CardMessage.Actions>
              <CardMessage.Action
                text="Recarregar página"
                onClick={() => getMovies()}
              />
            </CardMessage.Actions>
          </CardMessage.Container>
        </CardMessage.Root>
      )}
    </Container>
  );
}
