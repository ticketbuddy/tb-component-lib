import * as React from 'react'
import {GridContainer, GridItem} from './Grid'

export default { title: 'Grid' }

export const allowVerticalGrow = () => (
  <GridContainer height={200} allowVerticalGrow>
    <GridItem xs="1/12" sm="1/4" md="1/4" lg="1/4" style={{background: "tomato"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at rhoncus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis semper ex massa, in maximus nulla gravida eu. Ut eu posuere libero, vulputate sagittis purus. Proin lacinia mi vitae urna condimentum maximus. Nam ac mattis mi, ut faucibus erat. Cras consequat justo vitae massa sollicitudin porttitor. Praesent eu lectus elit. Fusce commodo orci turpis, in placerat enim hendrerit non.

Nam sit amet sollicitudin sapien. Donec justo nisl, egestas sit amet diam non, hendrerit egestas purus. Phasellus id nisl a mi interdum iaculis. Nunc augue lacus, eleifend id risus et, condimentum iaculis urna. Mauris eget eros finibus, dapibus massa vel, tempor odio. Donec ornare ex in neque volutpat consequat. Proin sagittis mollis congue. Quisque in turpis volutpat, lacinia neque eget, iaculis nisl. Vestibulum quis pulvinar odio. Vivamus eleifend ante odio, sit amet pretium purus varius ac. Sed molestie, sapien et efficitur ullamcorper, elit ipsum dictum dui, vel mattis orci purus ut felis. Quisque sed lacinia nisl, eu lacinia mauris. Suspendisse accumsan leo neque, et porta sem volutpat id. Sed tempor turpis in gravida ultrices.
    </GridItem>
    <GridItem xs="1/12" sm="4/5" md="4/5" lg="4/5" style={{background: "green"}}>content</GridItem>
    <GridItem xs="1/12" sm="5/12" md="5/12" lg="5/12" style={{background: "tomato"}}>content</GridItem>
  </GridContainer>
);

export const fixedHeight = () => (
  <GridContainer height={200}>
    <GridItem xs="1/12" sm="1/4" md="1/4" lg="1/4" style={{background: "tomato"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at rhoncus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis semper ex massa, in maximus nulla gravida eu. Ut eu posuere libero, vulputate sagittis purus. Proin lacinia mi vitae urna condimentum maximus. Nam ac mattis mi, ut faucibus erat. Cras consequat justo vitae massa sollicitudin porttitor. Praesent eu lectus elit. Fusce commodo orci turpis, in placerat enim hendrerit non.

Nam sit amet sollicitudin sapien. Donec justo nisl, egestas sit amet diam non, hendrerit egestas purus. Phasellus id nisl a mi interdum iaculis. Nunc augue lacus, eleifend id risus et, condimentum iaculis urna. Mauris eget eros finibus, dapibus massa vel, tempor odio. Donec ornare ex in neque volutpat consequat. Proin sagittis mollis congue. Quisque in turpis volutpat, lacinia neque eget, iaculis nisl. Vestibulum quis pulvinar odio. Vivamus eleifend ante odio, sit amet pretium purus varius ac. Sed molestie, sapien et efficitur ullamcorper, elit ipsum dictum dui, vel mattis orci purus ut felis. Quisque sed lacinia nisl, eu lacinia mauris. Suspendisse accumsan leo neque, et porta sem volutpat id. Sed tempor turpis in gravida ultrices.
    </GridItem>
    <GridItem xs="1/12" sm="4/5" md="4/5" lg="4/5" style={{background: "green"}}>content</GridItem>
    <GridItem xs="1/12" sm="5/12" md="5/12" lg="5/12" style={{background: "tomato"}}>content</GridItem>
  </GridContainer>
);

export const verticalAlign = () => (
  <GridContainer height={200}>
    <GridItem vertialAlign="start" xs="1/12" sm="1/4" md="1/4" lg="1/4" style={{background: "tomato"}}>start</GridItem>
    <GridItem vertialAlign="center" xs="1/12" sm="4/5" md="4/5" lg="4/5" style={{background: "green"}}>center</GridItem>
    <GridItem vertialAlign="end" xs="1/12" sm="5/12" md="5/12" lg="5/12" style={{background: "tomato"}}>end</GridItem>
  </GridContainer>
);
