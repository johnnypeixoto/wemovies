import { ReactNode } from "react";
import { TextButton } from "./styles";

interface CardMovieTextButtonProps {
  children: ReactNode;
  textTransform?: 'none'| 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: 'lighter' | 'normal' | 'bold'
}
export function CardMovieTextButton({ children, textTransform = 'uppercase', fontWeight = 'bold' }: CardMovieTextButtonProps) {
  return <TextButton textTransform={textTransform} fontWeight={fontWeight}>{children}</TextButton>;
}