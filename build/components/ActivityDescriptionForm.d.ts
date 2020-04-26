/// <reference types="react" />
import { Activity } from "../";
export declare type SubmitActivityDescription = (activity: ActivityDescriptionValues) => void;
export declare type ActivityDescriptionValues = {
    title: string;
    description: string;
};
interface ActivityDescriptionProps {
    activity: Activity;
    submitActivityDescription: SubmitActivityDescription;
}
export declare const ActivityDescriptionForm: (props: ActivityDescriptionProps) => JSX.Element;
export {};
