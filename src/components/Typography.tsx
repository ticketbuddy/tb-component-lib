import styled from "styled-components"

interface ParagraphProps {
  readonly muted?: boolean;
  readonly sm?: boolean;
}

export const P = styled.p<ParagraphProps>`
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.6;
  ${(props) => props.sm && "font-size: 0.8rem;"}
  ${(props) => props.muted && "opacity: 0.6;"}
`;
