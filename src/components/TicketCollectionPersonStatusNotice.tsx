import * as React from "react"
import {P, GridItem, GridContainer, Person, PersonState, Button} from "../";
import {Link} from "react-router-dom"

interface TicketCollectionUserStatusNoticeProps {
  person: Person
}

const AnonymousNotice = () => (
  <GridContainer>
    <GridItem xs="1/6" vertialAlign="center">
      <P>Sign in to reserve seats</P>
    </GridItem>
    <GridItem xs="6/13" horizontalAlign="end" vertialAlign="center">
      <Link to="/sign-in">
        <Button sm secondary>Sign in</Button>
      </Link>
    </GridItem>
  </GridContainer>
)

const AnonymousWithSessionNotice = () => (
  <GridContainer>
    <GridItem xs="1/6" vertialAlign="center">
      <P>Please verify your email</P>
    </GridItem>
    <GridItem xs="6/13" horizontalAlign="end" vertialAlign="center">
      <Link to="/sign-in">
        <Button sm secondary>Verify email (or set email....)</Button>
      </Link>
    </GridItem>
  </GridContainer>
)

export const TicketCollectionPersonStatusNotice = ({person}: TicketCollectionUserStatusNoticeProps) => (
  <div data-testid="ticket-collection-user-status-notice">
    <PersonState
      p={person}
      onAnonymous={() => <AnonymousNotice />}
      onAnonymousWithSession={() => <AnonymousWithSessionNotice />}
      onVerified={() => null}
    />
  </div>
)
