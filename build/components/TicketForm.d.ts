/// <reference types="react" />
import { Ticket } from "../";
export declare type SubmitTicket = (ticket: TicketValues) => void;
export declare type TicketValues = {
    title: string;
    quantity: number;
    amount: number;
};
interface TicketProps {
    ticket: Ticket;
    submitTicket: SubmitTicket;
}
export declare const TicketForm: (props: TicketProps) => JSX.Element;
export {};
