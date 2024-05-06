import { useReadLocalStorage } from "../../hooks/useReadLocalStorage";
import { Container } from "./styles";
import basketIcon from "../../assets/basket.svg";
import { CartItemsObject } from "../../context/types";

export function Header() {
  const cartItems: any = useReadLocalStorage("@cart-items");

  const getCartLength = (cartItems: CartItemsObject[]) => {
    const total = cartItems
      ?.map((cartItem: CartItemsObject) => {
        return cartItem?.count;
      })
      .reduce(function (acc: number, curr: number) {
        return acc + curr;
      }, 0);

    return total;
  };

  return (
    <Container>
      <button type="button" style={{backgroundColor: 'transparent', border: 'none'}} onClick={() => {
          const btn: any= document.getElementById('to-home');
          btn?.click()
        }}>
        <span>WeMovies</span>
      </button>
      <div className="basket-container">
        <div className="items-container">
          <span>Meu carrinho</span>
          <span>{getCartLength(cartItems)} itens</span>
        </div>
        <button type="button" onClick={() => {
          const btn: any= document.getElementById('to-cart');
          btn?.click()
        }}>
          <img src={basketIcon} alt="basket-logo" />
        </button>
      </div>
    </Container>
  );
}
