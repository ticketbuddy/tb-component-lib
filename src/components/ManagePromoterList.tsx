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
        <Button data-testid="create-promoter-btn" onClick={() => props.onNewPromoter()}>New promoter</Button>
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
      <Button data-testid="create-first-promoter-btn" onClick={() => props.onNewPromoter()}>Create first promoter</Button>
    </GridItem>
  </GridContainer>
)

export const ManagePromoterList = (props: ManagePromoterListProps) => {
  return (
    <div data-testid="manage-promoter-list">
      <EnumState
        e={props.promoters}
        onEmpty={() => <WhenNoPromoters {...props} />}
        onPopulated={() => <WhenPromotersExist {...props} />}
      />
    </div>
  )
}
