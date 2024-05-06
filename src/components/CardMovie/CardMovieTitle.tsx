import { ReactNode } from "react";
import { Title } from "./styles";

interface CardMovieTitleProps {
  children: ReactNode;
}
export function CardMovieTitle({ children }: CardMovieTitleProps) {
  return <Title>{children}</Title>;
}