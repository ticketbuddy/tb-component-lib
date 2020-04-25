declare type StatusCode = number;
declare type ReturnType<RawBody> = [boolean, StatusCode | null, RawBody | null];
export declare function useTbApi<RawBody>(request: any): ReturnType<RawBody>;
export {};
