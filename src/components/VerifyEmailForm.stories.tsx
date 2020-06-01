import * as React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"
import {VerifyEmailForm} from "./VerifyEmailForm"

export default { title: 'Verify Email' }

const onEmailSubmit = (values: {email: string}) => console.log(values)

export const noEmail = () => (
  <ThemeProvider theme={lightTheme}>
    <VerifyEmailForm email={null} onEmailSubmit={onEmailSubmit} />
  </ThemeProvider>
);

export const hasEmail = () => (
  <ThemeProvider theme={lightTheme}>
    <VerifyEmailForm email={"james@ticketbuddy.co.uk"} onEmailSubmit={onEmailSubmit} />
  </ThemeProvider>
);
