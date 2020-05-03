import * as React from 'react'
import { TicketCollection } from './TicketCollection'
import {Person} from "./person"
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

const anonymousPerson: Person = {
  account_id: null,
  person_id: null,
  "email_verified?": false,
  "is_anonymous?": true,
  user_status: "anonymous"
}

const anonymousWithSessionPerson: Person = {
  account_id: "account_1234567",
  person_id: "1234567",
  "email_verified?": false,
  "is_anonymous?": false,
  user_status: "anonymous_with_session"
}

const verifiedPerson: Person = {
  account_id: "account_1234567",
  person_id: "1234567",
  "email_verified?": true,
  "is_anonymous?": false,
  user_status: "verified"
}

const onAddToBasket = (productId: string) => {console.log(productId)}

export const noTickets = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={{}} onAddToBasket={onAddToBasket} person={anonymousPerson} />
  </ThemeProvider>
)

export const hasTicketsAnonymous = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={tickets} onAddToBasket={onAddToBasket} person={anonymousPerson} />
  </ThemeProvider>
)

export const anonymousWithSession = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={tickets} onAddToBasket={onAddToBasket} person={anonymousWithSessionPerson} />
  </ThemeProvider>
)

export const verified = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollection tickets={tickets} onAddToBasket={onAddToBasket} person={verifiedPerson} />
  </ThemeProvider>
)
