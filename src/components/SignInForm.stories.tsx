import * as React from 'react'
import { SignInForm, OnIncorrectCredentials } from './SignInForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Sign in form' }

export const incorrectCredentials = () => (
  <ThemeProvider theme={lightTheme}>
    <SignInForm submitSignIn={(values: any, onIncorrectCredentials: OnIncorrectCredentials) => {
      console.log(values)
      onIncorrectCredentials();
    } }/>
  </ThemeProvider>
)
