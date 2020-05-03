/// <reference types="react" />
import { Person, OnAddToBasket, Ticket } from "../";
interface TicketCollectionProps {
    tickets: {
        [ticketId: string]: Ticket;
    };
    onAddToBasket: OnAddToBasket;
    person: Person;
}
export declare const TicketCollection: ({ tickets, onAddToBasket, person }: TicketCollectionProps) => JSX.Element;
export {};
