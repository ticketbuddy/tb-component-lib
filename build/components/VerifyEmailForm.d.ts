/// <reference types="react" />
declare type VerifyEmailFormProps = {
    email: string | null;
    onEmailSubmit: (values: {
        email: string;
    }) => void;
};
export declare const VerifyEmailForm: ({ email, onEmailSubmit }: VerifyEmailFormProps) => JSX.Element;
export {};
