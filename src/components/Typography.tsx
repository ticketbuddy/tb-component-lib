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
  color: ${props => props.theme.fontColor};
  ${(props) => props.sm && "font-size: 0.8rem;"};
  ${(props) => props.muted && "opacity: 0.6;"};
  font-family: ${props => props.theme.textFontFamily};
`;

export const H1 = styled.h1`
  line-height: 1.3;
  margin-bottom: 1rem;
  font-size: 2.3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.headingFontFamily};
`;

export const H2 = styled.h2`
  line-height: 1.35;
  margin-bottom: 1rem;
  font-size: 1.93rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.headingFontFamily};
`;

export const H3 = styled.h3`
  line-height: 1.3;
  margin-bottom: 1rem;
  font-size: 1.31rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.headingFontFamily};
`;

export const H4 = styled.h4`
  line-height: 1.3;
  margin-bottom: 1rem;
  font-size: 1.18rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.headingFontFamily};
`;

export const H5 = styled.h5`
  line-height: 1.3;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.headingFontFamily};
`;
