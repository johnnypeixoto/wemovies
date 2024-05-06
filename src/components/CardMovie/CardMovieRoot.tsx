import { ReactNode } from "react";
import { RootContainer } from "./styles";

interface CardMovieRootProps {
  children: ReactNode;
}
export function CardMovieRoot({ children }: CardMovieRootProps) {
  return <RootContainer>{children}</RootContainer>;
}
