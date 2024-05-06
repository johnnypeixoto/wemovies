import { ReactNode } from "react";
import { Thead } from "./styles";

interface CardCheckoutTheadProps {
  children: ReactNode;
}
export function CardCheckoutThead({ children }: CardCheckoutTheadProps) {
  return <Thead>{children}</Thead>;
}