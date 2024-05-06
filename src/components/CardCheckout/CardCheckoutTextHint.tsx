import { ReactNode } from "react";
import { TextHint } from "./styles";

interface CardCheckoutTextHintProps {
  children: ReactNode;
  textTransform?: 'none'| 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: 'lighter' | 'normal' | 'bold'
  fontSize?: 'small' | 'normal'
}
export function CardCheckoutTextHint({ children, textTransform = 'uppercase', fontWeight = 'bold', fontSize = 'normal'}: CardCheckoutTextHintProps) {
  return <TextHint textTransform={textTransform} fontWeight={fontWeight} fontSize={fontSize}>{children}</TextHint>;
}