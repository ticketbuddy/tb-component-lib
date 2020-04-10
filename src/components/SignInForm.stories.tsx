import * as React from 'react'
import { SignInForm, OnIncorrectCredentials } from './SignInForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Sign in form' }

export const isNewerTerms = () => (
  <ThemeProvider theme={lightTheme}>
    <SignInForm onSubmit={(values: any, onIncorrectCredentials: OnIncorrectCredentials) => {
      console.log(onIncorrectCredentials)
      console.log(values)
      onIncorrectCredentials();
    } }/>
  </ThemeProvider>
)
