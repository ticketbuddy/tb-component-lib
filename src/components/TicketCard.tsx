import * as React from "react"
import {Ticket, H2, Surface, Button} from "../";
import { Link } from "react-router-dom";

interface TicketCardProps {
  ticket: Ticket
}

export const TicketCard = ({ticket: ticket}: TicketCardProps) => (
  <Surface shadow={10}>
    <Surface padding={1}>
      <H2>{ticket.title}</H2>
      <Link to={`/dashboard/ticket/${ticket.product_id}/edit`}>
        <Button>Edit</Button>
      </Link>
    </Surface>
  </Surface>
)
