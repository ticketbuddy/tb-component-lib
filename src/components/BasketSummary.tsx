import * as React from "react"
import {Seat, GridContainer, GridItem, P, Button} from "../";

export type OnUnreserve = (seatId: string) => void

interface BasketSummaryProps {
  basketItems: {
    [seatId: string]: Seat
  },
  onUnreserve: OnUnreserve
}

export const BasketSummary = ({basketItems, onUnreserve}: BasketSummaryProps) => {
  const basketItemsList = Object.values(basketItems)

  return (
    <GridContainer gap={1}>
      {basketItemsList.map((seat: Seat) => (
        <>
          <GridItem xs="1/7">
            <P>{seat.title}</P>
            <P sm>{seat.amount}</P>
          </GridItem>
          <GridItem vertialAlign="center" horizontalAlign="end" xs="7/13">
            <Button sm secondary onClick={() => onUnreserve(seat.item_id)}>Unreserve</Button>
          </GridItem>
        </>
      ))}
    </GridContainer>
  )
}
