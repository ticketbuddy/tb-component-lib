/// <reference types="react" />
import { Activity } from "../";
declare type ActivitiesList = {
    [activityId: string]: Activity;
};
interface ManageActivityListProps {
    onNewActivity: () => void;
    activities: ActivitiesList;
}
export declare const ManageActivityList: (props: ManageActivityListProps) => JSX.Element;
export {};
