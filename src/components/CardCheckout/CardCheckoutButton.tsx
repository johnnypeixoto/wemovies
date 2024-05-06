import { ButtonHTMLAttributes, ReactNode } from "react";
import { CheckoutButton } from "./styles";

interface CardCheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?:
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "initial"
    | "inherit";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  gap?: string;
  backgroundColor?: 'primary' | 'secondary';
}
export function CardCheckoutButton({
  children,
  flexDirection,
  gap = "12px",
  alignItems = "center",
  justifyContent = "center",
  backgroundColor = 'primary',
  ...rest
}: CardCheckoutButtonProps) {
  return (
    <CheckoutButton
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </CheckoutButton>
  );
}
