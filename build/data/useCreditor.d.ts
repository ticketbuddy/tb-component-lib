declare type Creditor = {
    creditorId: string;
    stripeAccountId: string | null;
    pendingFunds: number;
};
declare type FetchError = {
    error: true;
    message: string;
};
export declare const useCreditor: () => Creditor | FetchError;
export {};
