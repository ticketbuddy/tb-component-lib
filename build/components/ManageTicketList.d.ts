/// <reference types="react" />
import { Ticket } from "../";
declare type TicketsList = {
    [ticketId: string]: Ticket;
};
interface ManageTicketListProps {
    onNewTicket: () => void;
    tickets: TicketsList;
}
export declare const ManageTicketList: (props: ManageTicketListProps) => JSX.Element;
export {};
