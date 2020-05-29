import * as React from 'react'
import { TicketCollection } from './TicketCollection'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Ticket collection' }

const tickets = {
  "product_12345": {
    product_id: "product_12345",
    title: "Early bird",
    amount: 500,
    quantity: 780
  },
  "product_6789": {
    product_id: "product_6789",
    title: "Not so early bird",
    amount: 500,
    quantity: 780
  }
}

const onAddToBasket = (productId: string) => {console.log(productId)}

export const noTickets = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={{}} onAddToBasket={onAddToBasket} />
  </ThemeProvider>
)

export const hasTickets = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={tickets} onAddToBasket={onAddToBasket} />
  </ThemeProvider>
)
