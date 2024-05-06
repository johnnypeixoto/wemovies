import { ReactNode } from "react";
import { CheckoutActions } from "./styles";

interface CardCheckoutActionsProps {
  children: ReactNode;
}
export function CardCheckoutActions({ children }: CardCheckoutActionsProps) {
  return <CheckoutActions>{children}</CheckoutActions>;
}