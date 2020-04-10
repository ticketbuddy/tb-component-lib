import * as React from "react"
import {H1, Input, Button, GridContainer, GridItem, P} from "../";
import { useForm } from 'react-hook-form'

export type OnIncorrectCredentials = () => void;

interface SignInFormProps {
  onSubmit: (values: any, onIncorrectCredentials: OnIncorrectCredentials) => void
}

export const SignInForm = (props: SignInFormProps) => {
  const { register, handleSubmit, errors, setError } = useForm();

  const onIncorrectCredentials = () => {
    setError("credentials", "apiError")
  }

  const onSubmit = (values: any) => {
    props.onSubmit(values, onIncorrectCredentials)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer>
        <GridItem xs="1/13" vertialAlign="center">
          <GridContainer gap={1}>
            <GridItem xs="5/8">
              <H1>Sign In</H1>
              {errors.credentials && <P>Invalid credentials, please try again.</P>}
            </GridItem>
            <GridItem xs="5/8">
              <Input error={!!errors.email} type="email" placeholder="Email" name="email" ref={register({ required: true })} />
              {errors.email && <P>Email is required</P>}
            </GridItem>
            <GridItem xs="5/8">
              <Input error={!!errors.password} type="password" placeholder="Password" name="password" ref={register({ required: true })} />
              {errors.password && <P>Password is required</P>}
            </GridItem>
            <GridItem xs="5/8" horizontalAlign="center">
              <Button>Sign In</Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </form>
  )
}
