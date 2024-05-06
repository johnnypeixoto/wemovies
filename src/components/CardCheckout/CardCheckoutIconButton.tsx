import { ButtonHTMLAttributes } from "react";
import { CheckoutIconButton } from "./styles";

interface CardCheckoutIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}
export function CardCheckoutIconButton({
  icon,
  ...rest
}: CardCheckoutIconButtonProps) {
  return (
    <CheckoutIconButton
      {...rest}
    >
      <img style={{marginLeft: '-6px', marginRight: '-6px'}} src={icon} alt="" />
    </CheckoutIconButton>
  );
}
