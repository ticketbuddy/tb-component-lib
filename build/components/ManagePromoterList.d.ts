/// <reference types="react" />
import { Promoter } from "../";
declare type PromotersList = {
    [promoterId: string]: Promoter;
};
interface ManagePromoterListProps {
    onNewPromoter: () => void;
    promoters: PromotersList;
}
export declare const ManagePromoterList: (props: ManagePromoterListProps) => JSX.Element;
export {};
