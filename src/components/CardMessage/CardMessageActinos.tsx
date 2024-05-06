import { ReactNode } from "react"

interface CardMessageActionsProps {
    children: ReactNode
}
export function CardMessageActions ({children}: CardMessageActionsProps) {
    return (
        <div className="card-message-actions-container">
            {children}
        </div>
    )
}