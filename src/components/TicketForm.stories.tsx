import * as React from 'react'
import { TicketForm, ParsedTicketValues } from './TicketForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Ticket form' }

const ticket = {
  product_id: "ticket-abc",
  title: "Early bird",
  amount: 34535,
  quantity: 25
}

const creditorId = "creditor_123456789"

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketForm ticket={ticket} leadCreditorId={creditorId} submitTicket={((values: ParsedTicketValues) => { console.log(values); })} />
  </ThemeProvider>
)
