import * as React from "react"
import {Error, H1, Input, Button, GridContainer, GridItem} from "../";
import { useForm } from 'react-hook-form'

export type OnIncorrectCredentials = () => void;
export type SignInFormValues = {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSubmit: (values: SignInFormValues, onIncorrectCredentials: OnIncorrectCredentials) => void
}

export const SignInForm = (props: SignInFormProps) => {
  const { register, handleSubmit, errors, setError } = useForm();

  const onIncorrectCredentials = () => {
    setError("credentials", "apiError")
  }

  const onSubmit = (values: SignInFormValues) => {
    props.onSubmit(values, onIncorrectCredentials)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer>
        <GridItem xs="1/13" vertialAlign="center">
          <GridContainer gap={1}>
            <GridItem xs="5/8">
              <H1>Sign In</H1>
              {errors.credentials && <Error>Invalid credentials, please try again.</Error>}
            </GridItem>
            <GridItem xs="5/8">
              <Input error={!!errors.email} type="email" placeholder="Email" name="email" ref={register({ required: true })} />
              {errors.email && <Error>Email is required</Error>}
            </GridItem>
            <GridItem xs="5/8">
              <Input error={!!errors.password} type="password" placeholder="Password" name="password" ref={register({ required: true })} />
              {errors.password && <Error>Password is required</Error>}
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
