import * as React from 'react'
import styled, {css} from "styled-components"

interface PProps {
  readonly muted?: boolean;
  readonly sm?: boolean;
}

export const P: React.FunctionComponent<PProps> = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.6;
  ${(props: PProps) =>
    props.sm &&
    css`
      font-size: 0.8rem;
    `}
  ${(props: PProps) =>
    props.muted &&
    css`
      opacity: 0.6;
    `}
`;
