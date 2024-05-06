import { Count } from "./styles";
interface CardCheckoutCountProps {
  count: number;
}
export function CardCheckoutCount({
  count = 0,
}: CardCheckoutCountProps) {
  return (
    <Count><span>{count}</span></Count>
  );
}