import styled from "styled-components"

interface SurfaceProps {
  readonly spacing?: number
  readonly padding?: number
  readonly shadow?: number
}

export const Surface = styled.div<SurfaceProps>`
  ${props => props.shadow && `box-shadow: 0 0 ${props.shadow}px rgba(0, 0, 0, 0.1);`}
  background: ${props => props.theme.surfaceColor};
  padding: ${props => props.padding}rem;
  margin: ${props => props.spacing}rem;
`;
