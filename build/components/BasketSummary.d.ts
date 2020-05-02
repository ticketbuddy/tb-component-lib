/// <reference types="react" />
import { Seat } from "../";
export declare type OnUnreserve = (seatId: string) => void;
interface BasketSummaryProps {
    basketItems: {
        [seatId: string]: Seat;
    };
    onUnreserve: OnUnreserve;
}
export declare const BasketSummary: ({ basketItems, onUnreserve }: BasketSummaryProps) => JSX.Element;
export {};
