/// <reference types="react" />
import { ActivityDate } from "../";
export declare type SubmitActivityDate = (activity: ActivityDateValues) => void;
export declare type ActivityDateValues = {
    addr_line_1: string;
    addr_line_2: string;
    postcode: string;
    county: string;
    country: string;
    goes_live?: string;
    starts?: string;
    ends?: string;
};
interface ActivityDateProps {
    activityDate: ActivityDate;
    submitActivityDate: SubmitActivityDate;
}
export declare const ActivityDateForm: (props: ActivityDateProps) => JSX.Element;
export {};
