/// <reference types="react" />
interface LegalNoticeProps {
    userAcceptedVersion: number;
    latestVersion: number;
    onAccept: () => void;
}
export declare const LegalNotice: (props: LegalNoticeProps) => JSX.Element;
export {};
