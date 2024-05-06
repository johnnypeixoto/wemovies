import { CountIcon } from "./styles";
import cart from "../../assets/cart.svg";
interface CardMovieCountIconProps {
  count: number;
}
export function CardMovieCountIcon({ count = 0 }: CardMovieCountIconProps) {
  return (
    <CountIcon>
      <img src={cart} alt="" />
      <span>{count}</span>
    </CountIcon>
  );
}
