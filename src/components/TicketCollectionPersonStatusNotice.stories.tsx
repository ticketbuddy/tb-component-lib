import * as React from 'react'
import { TicketCollectionPersonStatusNotice } from './TicketCollectionPersonStatusNotice'
import {Person} from "./person"
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Ticket collection person status notice' }

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

export const anonymous = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollectionPersonStatusNotice person={anonymousPerson} />
  </ThemeProvider>
)

export const anonymousWithSession = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollectionPersonStatusNotice person={anonymousWithSessionPerson} />
  </ThemeProvider>
)

export const verified = () => (
  <ThemeProvider theme={lightTheme}>
    <TicketCollectionPersonStatusNotice person={verifiedPerson} />
  </ThemeProvider>
)
