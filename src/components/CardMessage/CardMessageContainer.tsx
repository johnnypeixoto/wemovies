import { ReactNode } from "react";
import { Container } from "./styles";

interface CardMessageContainerProps {
  children: ReactNode;
}
export function CardMessageContainer({ children }: CardMessageContainerProps) {
  return <Container>{children}</Container>;
}