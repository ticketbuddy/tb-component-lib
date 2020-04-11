import * as React from 'react'
import { TicketForm, TicketValues } from './TicketForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Ticket form' }

const ticket = {
  ticket_id: "ticket-abc",
  title: "Early bird",
  amount: 34535,
  quantity: 25
}

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketForm ticket={ticket} submitTicket={((values: TicketValues) => { console.log(values); })} />
  </ThemeProvider>
)
