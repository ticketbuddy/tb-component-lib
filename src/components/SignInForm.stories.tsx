import * as React from 'react'
import { SignInForm } from './SignInForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Sign in form' }

export const isNewerTerms = () => (
  <ThemeProvider theme={lightTheme}>
    <SignInForm />
  </ThemeProvider>
)
