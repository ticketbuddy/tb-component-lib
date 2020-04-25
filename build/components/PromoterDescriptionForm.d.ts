/// <reference types="react" />
import { Promoter } from "../";
export declare type SubmitPromoterDescription = (promoter: PromoterDescriptionValues) => void;
export declare type PromoterDescriptionValues = {
    title: string;
    description: string;
};
interface PromoterDescriptionProps {
    promoter: Promoter;
    submitPromoterDescription: SubmitPromoterDescription;
}
export declare const PromoterDescriptionForm: (props: PromoterDescriptionProps) => JSX.Element;
export {};
