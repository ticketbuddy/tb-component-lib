import { Basket } from "../";
export declare const BasketState: ({ b, onPending, onCompleted, onReserved, onClosed }: {
    b: Basket;
    onPending: () => any;
    onCompleted: () => any;
    onReserved: () => any;
    onClosed: () => any;
}) => any;
