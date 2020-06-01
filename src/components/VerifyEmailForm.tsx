import * as React from "react"
import {Button, Input, GridItem, GridContainer} from "../";
import { useForm } from 'react-hook-form'

type VerifyEmailFormProps = {
  email: string | null;
  onEmailSubmit: (values: {email: string}) => void;
}

export const VerifyEmailForm = ({email, onEmailSubmit}: VerifyEmailFormProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: {email: string}) => {
    onEmailSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer gap={1}>
        <GridItem xs="1/9">
          <Input defaultValue={email || ""} data-testid="email" placeholder="Email" name="email" ref={register({ required: true })} />
        </GridItem>
        <GridItem xs="9/13" vertialAlign="center" horizontalAlign="center">
          <Button data-testid="submit-ticket" sm>Send me magic link</Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}
