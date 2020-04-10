import styled from "styled-components";

interface GridContainerProps {
  readonly gap?: number;
  readonly allowVerticalGrow?: boolean;
  readonly height?: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  ${props => props.gap && `grid-gap: ${props.gap}rem;`}

  ${props => props.height && `grid-auto-rows: ${props.height}px;`}
  ${props => props.allowVerticalGrow && `grid-auto-rows: minmax(${props.height || 0}px, auto);`}
`;

interface GridItemProps {
  readonly xs: string
  readonly sm: string
  readonly md: string
  readonly lg: string
  readonly vertialAlign?: string
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${props => props.xs};
  ${props => props.vertialAlign && `align-self: ${props.vertialAlign};`}

  @media only screen and (min-width: 500px) {
    grid-column: ${props => props.sm};
  }
  @media only screen and (min-width: 750px) {
    grid-column: ${props => props.md};
  }
  @media only screen and (min-width: 950px) {
    grid-column: ${props => props.lg};
  }
`;
