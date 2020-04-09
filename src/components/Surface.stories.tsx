import * as React from 'react'
import {Surface} from './Surface'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Surface' }

export const surface = () => (
  <ThemeProvider theme={lightTheme}>
    <Surface shadow={10} spacing={1} padding={1.5}>
      Surface content
    </Surface>

    <Surface shadow={10} spacing={1} padding={1.5}>
      Surface content
    </Surface>
  </ThemeProvider>
);
