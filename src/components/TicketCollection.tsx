import * as React from "react"
import {Person, BuyTicketCard, OnAddToBasket, Ticket, H2, GridItem, GridContainer, EnumState} from "../";

interface TicketCollectionProps {
  tickets: {
    [ticketId: string]: Ticket
  },
  onAddToBasket: OnAddToBasket;
  person: Person
}

const ShowTickets = ({tickets, onAddToBasket, person}: TicketCollectionProps) => {
  const ticketList = Object.values(tickets)

  return (
    <GridContainer gap={1}>
      {ticketList.map((ticket: Ticket) => (
        <GridItem xs="1/13">
            <BuyTicketCard ticket={ticket} onAddToBasket={onAddToBasket} person={person} />
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

export const TicketCollection = ({tickets, onAddToBasket, person}: TicketCollectionProps) => (
  <div data-testid="ticket-collection">
    <EnumState e={tickets} onEmpty={() => <NoTickets />} onPopulated={() => <ShowTickets person={person} onAddToBasket={onAddToBasket} tickets={tickets} />} />
  </div>
)
