/// <reference types="react" />
import { ActivityDate } from "../";
declare type ActivityDateList = {
    [activityDateId: string]: ActivityDate;
};
interface ManageActivityDateListProps {
    onNewActivityDate: () => void;
    activityDates: ActivityDateList;
}
export declare const ManageActivityDateList: (props: ManageActivityDateListProps) => JSX.Element;
export {};
