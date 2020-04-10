import * as React from 'react'
import {Button} from './Button'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Button' }

export const buttons = () => (
  <ThemeProvider theme={lightTheme}>
    <Button>basic</Button>
    <br /><br />
    <Button secondary>secondary</Button>
    <br /><br />
    <Button sm>small</Button>
    <br /><br />
    <Button success>success</Button>
    <br /><br />
    <Button failure>error</Button>
    <br /><br />
    <Button disabled>disabled</Button>
  </ThemeProvider>
);
