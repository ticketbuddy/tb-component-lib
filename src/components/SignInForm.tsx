import * as React from "react"
import {H1, Input, Button} from "../";
import {GridContainer, GridItem} from "../"

export const SignInForm = () => (
  <GridContainer>
    <GridItem xs="1/13" vertialAlign="center">
      <GridContainer gap={1}>
        <GridItem xs="5/8">
          <H1>Sign In</H1>
        </GridItem>
        <GridItem xs="5/8">
          <Input type="email" placeholder="Email" />
        </GridItem>
        <GridItem xs="5/8">
          <Input type="password" placeholder="Password" />
        </GridItem>
        <GridItem xs="5/8" horizontalAlign="center">
          <Button>Sign In</Button>
        </GridItem>
      </GridContainer>
    </GridItem>
  </GridContainer>
)
