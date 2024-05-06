import { ReactNode } from "react";
import { Grid } from "./styles";

interface CardCheckoutGridProps {
  children: ReactNode;
}
export function CardCheckoutGrid({ children }: CardCheckoutGridProps) {
  return <Grid>{children}</Grid>;
}