import styled from "styled-components";

interface VerticalAlignedProps {
  readonly top?: boolean;
  readonly bottom?: boolean;
}

export const VerticalAlignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const VerticalAlignItem = styled.div`
  width: 100%;
  ${({ top }: VerticalAlignedProps) => top && "align-self: flex-start;"}
  ${({ bottom }: VerticalAlignedProps) => bottom && "align-self: flex-end;"}
`;
