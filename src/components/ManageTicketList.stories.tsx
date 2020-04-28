import * as React from 'react'
import { ManageTicketList } from './ManageTicketList'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Manage tickets' }

const tickets = {
  "product_abcdefghi": {
    product_id: "product_abcdefghi",
    title: "Early bird",
    amount: 0,
    quantity: 500
  },
  "product_xyz5678": {
    product_id: "product_xyz5678",
    title: "Early bird",
    amount: 0,
    quantity: 500
  }
}

export const manageTicketsList = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageTicketList tickets={tickets} onNewTicket={() => {}}/>
  </ThemeProvider>
)

export const whenNoTickets = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageTicketList tickets={{}} onNewTicket={() => {}}/>
  </ThemeProvider>
)
