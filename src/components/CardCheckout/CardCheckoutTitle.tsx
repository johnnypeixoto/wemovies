import { ReactNode } from "react";
import { Title } from "./styles";

interface CardCheckoutTitleProps {
  children: ReactNode;
}
export function CardCheckoutTitle({ children }: CardCheckoutTitleProps) {
  return <Title>{children}</Title>;
}