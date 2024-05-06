import { ReactNode } from "react";
import { TextHint } from "./styles";

interface CardMovieTextHintProps {
  children: ReactNode;
  textTransform?: 'none'| 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: 'lighter' | 'normal' | 'bold'
  fontSize?: 'small' | 'normal'
}
export function CardMovieTextHint({ children, textTransform = 'uppercase', fontWeight = 'bold', fontSize = 'normal'}: CardMovieTextHintProps) {
  return <TextHint textTransform={textTransform} fontWeight={fontWeight} fontSize={fontSize}>{children}</TextHint>;
}