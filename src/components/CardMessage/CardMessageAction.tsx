import { ButtonHTMLAttributes } from "react";

interface CardMessageActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export function CardMessageAction({ text, ...rest }: CardMessageActionProps) {
  return <button {...rest} className="card-message-button">{text}</button>;
}
