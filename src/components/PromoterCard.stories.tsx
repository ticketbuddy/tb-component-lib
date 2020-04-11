import * as React from 'react'
import { PromoterCard } from './PromoterCard'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Promoter Card' }

const promoter = {
  id: "promoter-abc",
  title: "My magnificent promoter"
}

export const noLogo = () => (
  <ThemeProvider theme={lightTheme}>
    <PromoterCard promoter={promoter}/>
  </ThemeProvider>
)
