import * as React from 'react'
import {VerticalAlignContainer, VerticalAlignItem} from './VerticalAlign'

export default { title: 'Vertical Alignment' }

export const verticalCenter = () => (
  <>
    <div style={{height: "500px", width: "500px", background: "tomato"}}>
      <VerticalAlignContainer>
        <VerticalAlignItem>
          Vertically centered in parent
        </VerticalAlignItem>
      </VerticalAlignContainer>
    </div>
  </>
);

export const verticalTop = () => (
  <>
    <div style={{height: "500px", width: "500px", background: "tomato"}}>
      <VerticalAlignContainer>
        <VerticalAlignItem top>
          Vertically top in parent
        </VerticalAlignItem>
      </VerticalAlignContainer>
    </div>
  </>
);

export const verticalBottom = () => (
  <>
    <div style={{height: "500px", width: "500px", background: "tomato"}}>
      <VerticalAlignContainer>
        <VerticalAlignItem bottom>
          Vertically bottom in parent
        </VerticalAlignItem>
      </VerticalAlignContainer>
    </div>
  </>
);
