import * as React from "react"
import {EnumState, PromoterCard, Button, Surface, GridContainer, GridItem, Promoter} from "../";

type PromotersList = {
  [promoterId: string]: Promoter
}

interface ManagePromoterListProps {
  onNewPromoter: () => void;
  promoters: PromotersList
}

const WhenPromotersExist = (props: ManagePromoterListProps) => {
  const promoters = Object.values(props.promoters)

  return (
    <GridContainer gap={1}>
      <GridItem xs="1/13" horizontalAlign="end">
        <Button onClick={() => props.onNewPromoter()}>New promoter</Button>
      </GridItem>
      {promoters.map((promoter: Promoter) => (
        <GridItem xs="1/13">
          <Surface>
            <PromoterCard promoter={promoter} />
          </Surface>
        </GridItem>
      ))}
    </GridContainer>
  )
}

const WhenNoPromoters = (props: ManagePromoterListProps) => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <Button onClick={() => props.onNewPromoter()}>Create first promoter</Button>
    </GridItem>
  </GridContainer>
)

export const ManagePromoterList = (props: ManagePromoterListProps) => {
  return (
    <EnumState
      e={props.promoters}
      onEmpty={() => <WhenNoPromoters {...props} />}
      onPopulated={() => <WhenPromotersExist {...props} />}
    />
  )
}
