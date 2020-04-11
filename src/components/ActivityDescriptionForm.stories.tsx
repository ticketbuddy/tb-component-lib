import * as React from 'react'
import { ActivityDescriptionForm } from './ActivityDescriptionForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Activity Description Form' }

const activity = {
  id: "activity-abc",
  title: "My magnificent activity",
  description: "This is my\n\n\ndescription."
}

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <ActivityDescriptionForm activity={activity} submitActivityDescription={(values => {console.log(values)})}/>
  </ThemeProvider>
)
