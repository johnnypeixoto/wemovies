import { ReactNode } from "react";
import { TextButton } from "./styles";

interface CardCheckoutTextButtonProps {
  children: ReactNode;
  textTransform?: 'none'| 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: 'lighter' | 'normal' | 'bold'
}
export function CardCheckoutTextButton({ children, textTransform = 'uppercase', fontWeight = 'bold' }: CardCheckoutTextButtonProps) {
  return <TextButton textTransform={textTransform} fontWeight={fontWeight}>{children}</TextButton>;
}