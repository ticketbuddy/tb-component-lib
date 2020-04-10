import * as React from 'react'
import { LegalNotice } from './LegalNotice'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Legal Notice' }

export const isNewerTerms = () => (
  <ThemeProvider theme={lightTheme}>
    <LegalNotice userAcceptedVersion={3} latestVersion={5} onAccept={() => {}} />
  </ThemeProvider>
)

export const isFirstAccept = () => (
  <ThemeProvider theme={lightTheme}>
    <LegalNotice userAcceptedVersion={0} latestVersion={5} onAccept={() => {}} />
  </ThemeProvider>
)

export const nothingToAccept = () => (
  <ThemeProvider theme={lightTheme}>
    <LegalNotice userAcceptedVersion={5} latestVersion={5} onAccept={() => {}} />
  </ThemeProvider>
)
