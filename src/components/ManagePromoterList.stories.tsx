import * as React from 'react'
import { ManagePromoterList } from './ManagePromoterList'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Manage promoters' }

const promoters = {
  "promoter_abcdefghi": {
    promoter_id: "promoter_abcdefghi",
    title: "Untitled promoter"
  },
  "promoter_xyz": {
    promoter_id: "promoter_xyz",
    title: "Second untitled promoter"
  }
}

export const managePromotersList = () => (
  <ThemeProvider theme={lightTheme}>
    <ManagePromoterList promoters={promoters} onNewPromoter={() => {}}/>
  </ThemeProvider>
)

export const whenNoPromoters = () => (
  <ThemeProvider theme={lightTheme}>
    <ManagePromoterList promoters={{}} onNewPromoter={() => {}}/>
  </ThemeProvider>
)
