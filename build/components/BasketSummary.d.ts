/// <reference types="react" />
export declare type OnUnreserve = (seatId: string) => void;
export declare type Seat = {
    item_id: string;
    title: string;
    amount: number;
};
interface BasketSummaryProps {
    basketItems: {
        [seatId: string]: Seat;
    };
    onUnreserve: OnUnreserve;
}
export declare const BasketSummary: ({ basketItems, onUnreserve }: BasketSummaryProps) => JSX.Element;
export {};
