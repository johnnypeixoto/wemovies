import { CountContainer } from "./styles";
import { ReactNode } from "react";
interface CardCheckoutCountContainerProps {
  children: ReactNode;
}
export function CardCheckoutCountContainer({
  children,
}: CardCheckoutCountContainerProps) {
  return (
    <CountContainer>
      {children}
    </CountContainer>
  );
}
