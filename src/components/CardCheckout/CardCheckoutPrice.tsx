import { ReactNode } from "react";
import { Price } from "./styles";

interface CardCheckoutPriceProps {
  children: ReactNode;
  size?: 'medium' | 'large'
}
export function CardCheckoutPrice({ children, size = 'medium' }: CardCheckoutPriceProps) {
  return <Price size={size}>R$ {children}</Price>;
}