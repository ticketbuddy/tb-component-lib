/// <reference types="react" />
import { OnAddToBasket, Ticket } from "../";
interface TicketCollectionProps {
    tickets: {
        [ticketId: string]: Ticket;
    };
    onAddToBasket: OnAddToBasket;
}
export declare const TicketCollection: ({ tickets, onAddToBasket }: TicketCollectionProps) => JSX.Element;
export {};
