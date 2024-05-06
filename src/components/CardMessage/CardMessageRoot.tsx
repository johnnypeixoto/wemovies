import { ReactNode } from "react";
import { RootContainer } from "./styles";

interface CardMessageRootProps {
  children: ReactNode;
}
export function CardMessageRoot({ children }: CardMessageRootProps) {
  return <RootContainer>{children}</RootContainer>;
}
