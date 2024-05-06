import { useState } from "react";
import { CartItemsObject, MoviesObject } from "../../context/types";
import { useWeMoviesContex } from "../../context/we-movies-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Container } from "./styles";
import { CardMessage } from "../../components/CardMessage";
import finish from "../../assets/finish.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import { CardCheckout } from "../../components/CardCheckout";
import { PriceArea, TitleArea } from "../../components/CardCheckout/styles";

export function Checkout() {
  const navigate = useNavigate();
  const [finishCheckout, setFinishCheckout] = useState(false);
  const { movies } = useWeMoviesContex();
  const [value, setValue]: any = useLocalStorage("@cart-items", []);

  const sumItem = (id: number) => {
    const hasMovie = value?.findIndex(
      (item: CartItemsObject) => item.id === id
    );

    if (hasMovie !== -1) {
      value[hasMovie] = { id, count: value[hasMovie].count + 1 };
      setValue(value);
    } else {
      setValue([...value, { id, count: 1 }]);
    }
  };

  const subItem = (id: number) => {
    const hasMovie = value?.findIndex(
      (item: CartItemsObject) => item.id === id
    );

    if (hasMovie !== -1) {
      if (value[hasMovie].count === 1) return;
      value[hasMovie] = { id, count: value[hasMovie].count - 1 };
      setValue(value);
    } else {
      setValue([...value, { id, count: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    const filteredMovies = value?.filter(
      (item: CartItemsObject) => item.id !== id
    );
    setValue(filteredMovies);
  };

  const fetchMovieAdded = (id: number, count: number) => {
    const cardItem = movies.find((movie: MoviesObject) => movie.id === id);
    if (cardItem) {
      return (
        <CardCheckout.Grid>
          <div style={{ gridArea: "image" }}>
            <CardCheckout.Image src={cardItem.image} width="147px" />
          </div>
          <TitleArea>
            <CardCheckout.Title>{cardItem.title}</CardCheckout.Title>
          </TitleArea>
          <PriceArea>
            <CardCheckout.Price>
              {cardItem.price?.toFixed(2)}
            </CardCheckout.Price>
          </PriceArea>
          <div
            style={{
              gridArea: "count",
              display: "flex",
              alignItems: "center",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <CardCheckout.CountContainer>
              <CardCheckout.IconButton
                icon={minus}
                onClick={() => subItem(id)}
              />
              <CardCheckout.Count count={count} />
              <CardCheckout.IconButton
                icon={plus}
                onClick={() => sumItem(id)}
              />
            </CardCheckout.CountContainer>
          </div>
          <div style={{ gridArea: "separator" }}>
            <CardCheckout.Separator />
          </div>
          <div
            style={{
              gridArea: "trash",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <CardCheckout.IconButton
              icon={trash}
              onClick={() => removeItem(id)}
            />
          </div>
          <div
            style={{
              gridArea: "subtotal",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <CardCheckout.TextHint fontSize="small">
              Subtotal
            </CardCheckout.TextHint>
            <CardCheckout.Price>
              {(cardItem.price * count)?.toFixed(2)}
            </CardCheckout.Price>
          </div>
        </CardCheckout.Grid>
      );
    } else {
      <span>O filme não está mais disponível</span>;
    }
  };

  const getTotal = (cartItems: CartItemsObject[]) => {
    const total = cartItems
      ?.map((cartItem: CartItemsObject) => {
        const movie = movies?.find(
          (movie: MoviesObject) => movie?.id === cartItem?.id
        );
        if (movie) return movie?.price * cartItem?.count;
        return 0;
      })
      .reduce(function (acc: number, curr: number) {
        return acc + curr;
      }, 0);

    return total;
  };

  return (
    <Container>
      <button id="to-home" style={{display: 'none'}} type="button" onClick={() => navigate("/")}>home</button>
      {finishCheckout ? (
        <CardMessage.Root>
          <CardMessage.Container>
            <CardMessage.Text text="Compra realizada com sucesso!" />
            <CardMessage.Image
              src={finish}
              alt="Compra finalizada"
              className="card-message-image-size-control"
            />
            <CardMessage.Actions>

                <CardMessage.Action
                  text="VOLTAR"
                  onClick={() => {
                    setFinishCheckout(false);
                    navigate("/");
                  }}
                />

            </CardMessage.Actions>
          </CardMessage.Container>
        </CardMessage.Root>
      ) : (
        <>
          <CardCheckout.Root>
            <CardCheckout.Container>
              <CardCheckout.Thead>
                <div
                  style={{
                    gridArea: "product",
                  }}
                  className="test-grid"
                >
                  <CardCheckout.TextHint fontSize="normal">
                    Produto
                  </CardCheckout.TextHint>
                </div>
                <div
                  style={{
                    gridArea: "qdt",
                    paddingLeft: "16px",
                  }}
                >
                  <CardCheckout.TextHint fontSize="normal">
                    Qdt
                  </CardCheckout.TextHint>
                </div>
                <div
                  style={{
                    gridArea: "sub",
                  }}
                >
                  <CardCheckout.TextHint fontSize="normal">
                    Subtotal
                  </CardCheckout.TextHint>
                </div>
              </CardCheckout.Thead>

              {value.map(({ id, count }: CartItemsObject) => (
                <>{fetchMovieAdded(id, count)}</>
              ))}
              <CardCheckout.Actions>
                <CardCheckout.Button
                  onClick={() => {
                    setFinishCheckout(true);
                    setValue([]);
                  }}
                >
                  <CardCheckout.TextButton>
                    Finalizar pedido
                  </CardCheckout.TextButton>
                </CardCheckout.Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <CardCheckout.TextHint>Total</CardCheckout.TextHint>
                  <CardCheckout.Price size="large">
                    {getTotal(value)?.toFixed(2)}
                  </CardCheckout.Price>
                </div>
              </CardCheckout.Actions>
            </CardCheckout.Container>
          </CardCheckout.Root>
        </>
      )}
    </Container>
  );
}
