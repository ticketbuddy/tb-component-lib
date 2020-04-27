import * as React from 'react'
import { ManageActivityDateList } from './ManageActivityDateList'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Manage activity dates' }

const activityDates = {
  "activitydate_abcdefghi": {
    activity_date_id: "activitydate_abcdefghi",
    activity_id: "activity_345346"
  },
  "activitydate_xyz": {
    activity_date_id: "activitydate_xyz",
    activity_id: "activity_345346"
  }
}

export const manageActivityDatesList = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageActivityDateList activityDates={activityDates} onNewActivityDate={() => {}}/>
  </ThemeProvider>
)

export const whenNoActivityDates = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageActivityDateList activityDates={{}} onNewActivityDate={() => {}}/>
  </ThemeProvider>
)
