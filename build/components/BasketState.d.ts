import { Basket } from "../";
export declare const BasketState: ({ b, onAnonymous, onAnonymousWithSession, onVerified }: {
    b: Basket;
    onPending: () => any;
    onCompleted: () => any;
    onReserved: () => any;
    onClosed: () => any;
}) => any;
