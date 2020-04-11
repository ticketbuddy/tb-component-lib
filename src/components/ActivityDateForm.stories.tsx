import * as React from 'react'
import { ActivityDateForm, ActivityDateValues } from './ActivityDateForm'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Activity Date Form' }

const activityDate = {
  activity_id: "activity-abc",
  activity_date_id: "activity-date-abc"
}

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <ActivityDateForm activityDate={activityDate} submitActivityDate={((values: ActivityDateValues) => {console.log(values)})}/>
  </ThemeProvider>
)
