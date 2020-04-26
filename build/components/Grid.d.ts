interface GridContainerProps {
    readonly gap?: number;
    readonly allowVerticalGrow?: boolean;
    readonly height?: number;
}
export declare const GridContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GridContainerProps, never>;
interface GridItemProps {
    readonly xs: string;
    readonly sm?: string;
    readonly md?: string;
    readonly lg?: string;
    readonly vertialAlign?: string;
    readonly horizontalAlign?: string;
}
export declare const GridItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GridItemProps, never>;
export {};
