import * as React from 'react'
import {TextArea, Input} from './Input'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Inputs' }

export const inputs = () => (
  <ThemeProvider theme={lightTheme}>
  <TextArea placeholder="Description" />
  <br /> <br />
  <Input placeholder="Name" />
  <br /> <br />
  <Input lg placeholder="Large input for name" />
  </ThemeProvider>
)

export const errors = () => (
  <ThemeProvider theme={lightTheme}>
  <TextArea error />
  <br /> <br />
  <Input error />
  </ThemeProvider>
)

export const success = () => (
  <ThemeProvider theme={lightTheme}>
  <TextArea success />
  <br /> <br />
  <Input success />
  </ThemeProvider>
)
