import { Separator } from "./styles";

interface CardMovieSeparatorProps {
  marginAround?: string;
}
export function CardMovieSeparator({ marginAround = "16px" }: CardMovieSeparatorProps) {
  return <Separator marginAround={marginAround} />;
}