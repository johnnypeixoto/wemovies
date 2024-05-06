import { ReactNode } from "react";
import { Price } from "./styles";

interface CardMoviePriceProps {
  children: ReactNode;
  size?: 'medium' | 'large'
}
export function CardMoviePrice({ children, size = 'medium' }: CardMoviePriceProps) {
  return <Price size={size}>R$ {children}</Price>;
}