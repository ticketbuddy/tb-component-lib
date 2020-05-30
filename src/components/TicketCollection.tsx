import * as React from "react"
import {BuyTicketCard, OnAddToBasket, Ticket, H2, GridItem, GridContainer, EnumState} from "../";

interface TicketCollectionProps {
  tickets: {
    [ticketId: string]: Ticket
  },
  onAddToBasket: OnAddToBasket;
}

const ShowTickets = ({tickets, onAddToBasket}: TicketCollectionProps) => {
  const ticketList = Object.values(tickets)

  return (
    <GridContainer gap={1}>
      {ticketList.map((ticket: Ticket) => (
        <GridItem xs="1/13">
            <BuyTicketCard ticket={ticket} onAddToBasket={onAddToBasket} />
        </GridItem>
      ))}
    </GridContainer>
  )
}

const NoTickets = () => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <H2>Sorry, no tickets available!</H2>
    </GridItem>
  </GridContainer>
)

export const TicketCollection = ({tickets, onAddToBasket}: TicketCollectionProps) => (
  <div data-testid="ticket-collection">
    <EnumState e={tickets} onEmpty={() => <NoTickets />} onPopulated={() => <ShowTickets onAddToBasket={onAddToBasket} tickets={tickets} />} />
  </div>
)
