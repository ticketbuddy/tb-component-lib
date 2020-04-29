/// <reference types="react" />
import { Ticket } from "../";
export declare type SubmitTicket = (ticket: ParsedTicketValues) => void;
export declare type ParsedTicketValues = {
    title: string;
    quantity: number;
    shareholders: {
        [creditorId: string]: number;
    };
};
export declare type TicketValues = {
    title: string;
    quantity: string;
    amount: string;
};
interface TicketProps {
    ticket: Ticket;
    submitTicket: SubmitTicket;
    leadCreditorId: string;
}
export declare const TicketForm: (props: TicketProps) => JSX.Element | null;
export {};
