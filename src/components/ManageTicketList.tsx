import * as React from "react"
import {EnumState, TicketCard, Button, Surface, GridContainer, GridItem, Ticket} from "../";

type TicketsList = {
  [ticketId: string]: Ticket
}

interface ManageTicketListProps {
  onNewTicket: () => void;
  tickets: TicketsList
}

const WhenTicketsExist = (props: ManageTicketListProps) => {
  const tickets = Object.values(props.tickets)

  return (
    <GridContainer gap={1}>
      <GridItem xs="1/13" horizontalAlign="end">
        <Button data-testid="create-ticket-btn" onClick={() => props.onNewTicket()}>New ticket</Button>
      </GridItem>
      {tickets.map((ticket: Ticket) => (
        <GridItem xs="1/13">
          <Surface>
            <TicketCard ticket={ticket} />
          </Surface>
        </GridItem>
      ))}
    </GridContainer>
  )
}

const WhenNoTickets = (props: ManageTicketListProps) => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <Button data-testid="create-first-ticket-btn" onClick={() => props.onNewTicket()}>Create first ticket</Button>
    </GridItem>
  </GridContainer>
)

export const ManageTicketList = (props: ManageTicketListProps) => {
  return (
    <EnumState
      e={props.tickets}
      onEmpty={() => <WhenNoTickets {...props} />}
      onPopulated={() => <WhenTicketsExist {...props} />}
    />
  )
}
