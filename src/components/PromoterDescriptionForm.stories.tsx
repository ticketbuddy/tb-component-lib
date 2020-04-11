import * as React from 'react'
import { PromoterDescriptionForm } from './PromoterDescriptionForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Promoter Description' }

const promoter = {
  id: "promoter-abc",
  title: "My magnificent promoter",
  description: "This is my\n\n\ndescription."
}

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <PromoterDescriptionForm promoter={promoter} submitPromoterDescription={(values => {console.log(values)})}/>
  </ThemeProvider>
)
