import * as React from "react"
import {Ticket, Input, Button, H2, Error, GridItem, GridContainer} from "../";
import { useForm } from 'react-hook-form'

export type SubmitTicket = (ticket: ParsedTicketValues) => void;

export type ParsedTicketValues = {
  title: string;
  quantity: number;
  amount: number;
}

export type TicketValues = {
  title: string;
  quantity: string;
  amount: string;
}

interface TicketProps {
  ticket: Ticket,
  submitTicket: SubmitTicket
}

export const TicketForm = (props: TicketProps) => {
  const {ticket} = props
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values: TicketValues) => {
    props.submitTicket({
      title: values.title,
      quantity: parseInt(values.quantity),
      amount: parseInt(values.amount)
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer gap={1}>
        <GridItem xs="1/13">
          <H2 data-testid="ticket-description-title">Edit {ticket.title}</H2>
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={ticket.title} data-testid="title-input" error={!!errors.title} placeholder="Title" name="title" ref={register({ required: true })} />
          {errors.title && <Error data-testid="title-error">A ticket must have a title</Error>}
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={ticket.quantity} data-testid="quantity-input" error={!!errors.quantity} placeholder="Quantity" name="quantity" ref={register({ required: true })} />
          {errors.quantity && <Error data-testid="quantity-error">A ticket must have a set quantity that</Error>}
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={ticket.amount} data-testid="amount-input" error={!!errors.amount} placeholder="Amount" name="amount" ref={register({ required: true })} />
          {errors.amount && <Error data-testid="amount-error">A ticket must have an amount</Error>}
        </GridItem>
        <GridItem xs="1/13">
          <Button data-testid="submit-ticket">Save</Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}
