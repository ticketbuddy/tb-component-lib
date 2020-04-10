import styled from "styled-components";

interface GridContainerProps {
  readonly gap?: number;
  readonly allowVerticalGrow?: boolean;
  readonly height?: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  box-sizing: border-box;

  grid-template-columns: repeat(12, 1fr);
  ${props => props.gap && `grid-gap: ${props.gap}em;`}

  ${props => props.height && `grid-auto-rows: ${props.height}px;`}
  ${props => props.allowVerticalGrow && `grid-auto-rows: minmax(${props.height || 0}px, auto);`}
`;

interface GridItemProps {
  readonly xs: string
  readonly sm?: string
  readonly md?: string
  readonly lg?: string
  readonly vertialAlign?: string
  readonly horizontalAlign?: string
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${props => props.xs};
  box-sizing: border-box;
  ${props => props.vertialAlign && `align-self: ${props.vertialAlign};`}
  ${props => props.horizontalAlign && `justify-self: ${props.horizontalAlign};`}

  @media only screen and (min-width: 500px) {
    grid-column: ${props => props.sm || props.xs};
  }
  @media only screen and (min-width: 750px) {
    grid-column: ${props => props.md || props.sm || props.xs};
  }
  @media only screen and (min-width: 950px) {
    grid-column: ${props => props.lg || props.md || props.sm || props.xs};
  }
`;
