import { Separator } from "./styles";

interface CardCheckoutSeparatorProps {
  marginAround?: string;
}
export function CardCheckoutSeparator({ marginAround = "16px" }: CardCheckoutSeparatorProps) {
  return <Separator marginAround={marginAround} />;
}