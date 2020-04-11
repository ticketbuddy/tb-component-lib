import styled from "styled-components";
interface ImgProps {
  readonly height?: string;
  readonly width?: string;
  readonly src: string;
}

export const Image = styled.div<ImgProps>`
  background-image: url("${({ src }) => src}");
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
