import { ReactNode } from "react";
import { Actions } from "./styles";

interface CardMovieActionsProps {
  children: ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
  gap?: string;
  width?: string;
  height?: string;
}
export function CardMovieActions({ children, flexDirection, gap, alignItems, justifyContent, width = '100%' }: CardMovieActionsProps) {
  return <Actions flexDirection={flexDirection} gap={gap} alignItems={alignItems} justifyContent={justifyContent} width={width}>{children}</Actions>;
}