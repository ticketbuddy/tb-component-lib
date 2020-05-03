/// <reference types="react" />
import { Ticket, Person } from "../";
export declare type OnAddToBasket = (productId: string) => void;
interface TicketCardProps {
    ticket: Ticket;
    onAddToBasket: OnAddToBasket;
    person: Person;
}
export declare const BuyTicketCard: ({ ticket, onAddToBasket, person }: TicketCardProps) => JSX.Element;
export {};
