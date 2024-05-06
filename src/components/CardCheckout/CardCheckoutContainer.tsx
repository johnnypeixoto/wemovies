import { ReactNode } from "react";
import { Container } from "./styles";

interface CardCheckoutContainerProps {
  children: ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
  gap?: string;
}
export function CardCheckoutContainer({ children, flexDirection = 'column', gap, alignItems, justifyContent }: CardCheckoutContainerProps) {
  return <Container flexDirection={flexDirection} gap={gap} alignItems={alignItems} justifyContent={justifyContent} >{children}</Container>;
}