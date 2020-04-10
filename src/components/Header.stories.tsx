import * as React from 'react'
import {Header} from './Header'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Header' }

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <Header openMenu={() => {}} />
  </ThemeProvider>
)
