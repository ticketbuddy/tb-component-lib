/// <reference types="react" />
import { Ticket } from "../";
export declare type OnAddToBasket = (productId: string) => void;
interface TicketCardProps {
    ticket: Ticket;
    onAddToBasket: OnAddToBasket;
}
export declare const BuyTicketCard: ({ ticket, onAddToBasket }: TicketCardProps) => JSX.Element;
export {};
