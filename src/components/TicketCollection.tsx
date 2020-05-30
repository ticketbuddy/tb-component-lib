import * as React from "react"
import {Ticket, H2, H3, P, Button, Surface, GridItem, GridContainer, EnumState} from "../";

interface TicketCollectionProps {
  tickets: {
    [ticketId: string]: Ticket
  }
}

const ShowTickets = ({tickets}: TicketCollectionProps) => {
  const ticketList = Object.values(tickets)

  return (
    <form method="POST" action="/api/basket">
      <GridContainer gap={1}>
        {ticketList.map((ticket: Ticket) => (
          <GridItem xs="1/13">
            <Surface padding={1} shadow={10} data-testid="buy-ticket-card">
              <GridContainer gap={1}>
                <GridItem xs="1/6">
                  <H3>{ticket.title}</H3>
                  <P muted>{ticket.amount}</P>
                </GridItem>
                <GridItem vertialAlign="center" horizontalAlign="end" xs="6/13">
                  <select name={ticket.product_id} >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </GridItem>
              </GridContainer>
            </Surface>
          </GridItem>
        ))}
      </GridContainer>
      <Button data-testid="submit-ticket-collection">Continue</Button>
    </form>
  )
}

const NoTickets = () => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <H2>Sorry, no tickets available!</H2>
    </GridItem>
  </GridContainer>
)

export const TicketCollection = ({tickets}: TicketCollectionProps) => (
  <div data-testid="ticket-collection">
    <EnumState e={tickets} onEmpty={() => <NoTickets />} onPopulated={() => <ShowTickets tickets={tickets} />} />
  </div>
)
