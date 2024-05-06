import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

interface CardMovieButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  width?: string;
  height?: string;
  backgroundColor?: 'primary' | 'secondary';
}
export function CardMovieButton({
  children,
  flexDirection,
  gap = "12px",
  alignItems = "center",
  justifyContent = "center",
  width = "100%",
  height = "40px",
  backgroundColor = 'primary',
  ...rest
}: CardMovieButtonProps) {
  return (
    <Button
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </Button>
  );
}
