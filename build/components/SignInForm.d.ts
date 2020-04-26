/// <reference types="react" />
export declare type OnIncorrectCredentials = () => void;
export declare type SignInFormValues = {
    email: string;
    password: string;
};
interface SignInFormProps {
    submitSignIn: (values: SignInFormValues, onIncorrectCredentials: OnIncorrectCredentials) => void;
}
export declare const SignInForm: (props: SignInFormProps) => JSX.Element;
export {};
