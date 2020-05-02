import * as React from 'react'
import {GridContainer, GridItem} from "../"
import styled from "styled-components"

interface HeaderProps {
  openMenu: () => void
}

const HeaderWrapper = styled.header`
  background: ${props => props.theme.primaryColorDark};
  padding: 15px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;


export const Header = (props: HeaderProps) => (
  <HeaderWrapper data-testid="header">
    <GridContainer>
      <GridItem xs="3/6">
        logo
      </GridItem>

      <GridItem xs="6/10" horizontalAlign="end" onClick={() => props.openMenu()}>
        burger menu
      </GridItem>
    </GridContainer>
  </HeaderWrapper>
)
