import * as React from 'react'
import {P, H1, H2, H3, H4, H5} from './Typography'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Typography' }

export const paragraph = () => (
  <ThemeProvider theme={lightTheme}>
    <P>This is a standard paragraph</P>
    <P sm>This is a small paragraph</P>
    <P muted>This is a muted paragraph</P>
  </ThemeProvider>
);

export const headings = () => (
  <ThemeProvider theme={lightTheme}>
    <H1>Heading one</H1>
    <H2>Heading two</H2>
    <H3>Heading three</H3>
    <H4>Heading four</H4>
    <H5>Heading five</H5>
  </ThemeProvider>
);
