/// <reference types="react" />
import { Basket } from "../";
export declare type OnUnreserve = (seatId: string) => void;
interface BasketSummaryProps {
    basket: Basket;
    onUnreserve: OnUnreserve;
}
export declare const BasketSummary: ({ basket, onUnreserve }: BasketSummaryProps) => JSX.Element;
export {};
