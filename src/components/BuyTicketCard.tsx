import * as React from "react"
import {Ticket, H3, P, GridContainer, GridItem, Surface, Button} from "../";

export type OnAddToBasket = (productId: string) => void
interface TicketCardProps {
  ticket: Ticket;
  onAddToBasket: OnAddToBasket;
}

export const BuyTicketCard = ({ticket, onAddToBasket}: TicketCardProps) => (
  <Surface padding={1} shadow={10} data-testid="buy-ticket-card">
    <GridContainer gap={1}>
      <GridItem xs="1/6">
        <H3>{ticket.title}</H3>
        <P muted>{ticket.amount}</P>
      </GridItem>
      <GridItem vertialAlign="center" horizontalAlign="end" xs="6/13">
      <Button onClick={() => onAddToBasket(ticket.product_id)} sm secondary>+ 1</Button>
      </GridItem>
    </GridContainer>
  </Surface>
)
