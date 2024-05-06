interface CardMessageTextProps {
    text: string;
}
export function CardMessageText ({text}: CardMessageTextProps) {
    return (<span className="card-message-text">{text}</span>)
}