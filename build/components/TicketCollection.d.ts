/// <reference types="react" />
import { Ticket } from "../";
interface TicketCollectionProps {
    tickets: {
        [ticketId: string]: Ticket;
    };
}
export declare const TicketCollection: ({ tickets }: TicketCollectionProps) => JSX.Element;
export {};
