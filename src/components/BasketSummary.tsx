import * as React from "react"
import {Basket, BasketItem, H3, GridContainer, GridItem, P, Button} from "../";

export type OnUnreserve = (seatId: string) => void

interface BasketSummaryProps {
  basket: Basket;
  onUnreserve: OnUnreserve;
}

const ReservedItems = ({items, onUnreserve}: {onUnreserve: OnUnreserve, items: BasketItem[]}) => {
  return (
    <>
    {items.map((item: BasketItem) => (
      <>
        <GridItem xs="1/7">
          <P>{item.product.title}</P>
          <P sm>{item.product.amount}</P>
        </GridItem>
        <GridItem vertialAlign="center" horizontalAlign="end" xs="7/13">
          <Button sm secondary onClick={() => onUnreserve(item.item_id)}>Unreserve</Button>
        </GridItem>
      </>
    ))}
    </>
  )
}

export const BasketSummary = ({basket, onUnreserve}: BasketSummaryProps) => {
  return (
    <>
      <H3>Basket {basket.status}</H3>
      <GridContainer gap={1} data-testid="basket-summary">
        <ReservedItems items={basket.items} onUnreserve={onUnreserve} />
      </GridContainer>
    </>
  )
}
