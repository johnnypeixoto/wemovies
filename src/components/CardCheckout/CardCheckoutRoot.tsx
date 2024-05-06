import { ReactNode } from "react";
import { RootContainer } from "./styles";

interface CardCheckoutRootProps {
  children: ReactNode;
}
export function CardCheckoutRoot({ children }: CardCheckoutRootProps) {
  return <RootContainer>{children}</RootContainer>;
}
