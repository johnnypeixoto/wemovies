import { ReactNode } from "react";
import { Description } from "./styles";

interface CardMovieDescriptionProps {
  children: ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
  gap?: string;
  width?: string;
  height?: string;
}
export function CardMovieDescription({ children, flexDirection = 'column', gap = '8px', alignItems = 'center', justifyContent }: CardMovieDescriptionProps) {
  return <Description flexDirection={flexDirection} gap={gap} alignItems={alignItems} justifyContent={justifyContent} >{children}</Description>;
}