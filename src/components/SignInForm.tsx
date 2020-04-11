import * as React from "react"
import {H1, Error, Input, Button, GridContainer, GridItem} from "../";
import { useForm } from 'react-hook-form'

export type OnIncorrectCredentials = () => void;
export type SignInFormValues = {
  email: string;
  password: string;
}

interface SignInFormProps {
  submitSignIn: (values: SignInFormValues, onIncorrectCredentials: OnIncorrectCredentials) => void
}

export const SignInForm = (props: SignInFormProps) => {
  const { register, errors, setError, handleSubmit } = useForm();

  const onIncorrectCredentials = () => {
    setError("credentials", "apiError")
  }

  const onSubmit = (values: SignInFormValues) => {
    props.submitSignIn(values, onIncorrectCredentials);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <GridContainer>
            <GridItem xs="1/13" vertialAlign="center">
              <GridContainer gap={1}>
                <GridItem xs="1/13" sm="2/12" md="4/10" lg="5/8">
                  <H1 data-testid="sign-in-title">Sign In</H1>
                  {errors.credentials && <Error data-testid="credentials-error">Invalid credentials, please try again.</Error>}
                </GridItem>
                <GridItem xs="1/13" sm="2/12" md="4/10" lg="5/8">
                  <Input data-testid="email-input" error={!!errors.email} type="email" placeholder="Email" name="email" ref={register({ required: true })} />
                  {errors.email && <Error data-testid="email-error">Email is required</Error>}
                </GridItem>
                <GridItem xs="1/13" sm="2/12" md="4/10" lg="5/8">
                  <Input data-testid="password-input" error={!!errors.password} type="password" placeholder="Password" name="password" ref={register({ required: true })} />
                  {errors.password && <Error data-testid="password-error">Password is required</Error>}
                </GridItem>
                <GridItem xs="1/13" sm="2/12" md="4/10" lg="5/8" horizontalAlign="center">
                  <Button data-testid="submit-sign-in">Sign In</Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </form>
  )
}
