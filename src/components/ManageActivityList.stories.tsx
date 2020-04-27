import * as React from 'react'
import { ManageActivityList } from './ManageActivityList'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme";


export default { title: 'Manage activities' }

const activities = {
  "activity_xyz": {
    promoter_id: "promoter_abcdefghi",
    activity_id: "activity_xyz",
    title: "Untitled event"
  },
  "activity_qwe": {
    promoter_id: "promoter_abcdefghi",
    activity_id: "activity_qwe",
    title: "Second untitled event"
  }
}

export const manageActivitiesList = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageActivityList activities={activities} onNewActivity={() => {}}/>
  </ThemeProvider>
)

export const whenNoActivities = () => (
  <ThemeProvider theme={lightTheme}>
    <ManageActivityList activities={{}} onNewActivity={() => {}}/>
  </ThemeProvider>
)
