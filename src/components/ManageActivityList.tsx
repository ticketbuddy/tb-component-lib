import * as React from "react"
import {EnumState, ActivityCard, Button, Surface, GridContainer, GridItem, Activity} from "../";

type ActivitiesList = {
  [activityId: string]: Activity
}

interface ManageActivityListProps {
  onNewActivity: () => void;
  activities: ActivitiesList
}

const WhenActivitiesExist = (props: ManageActivityListProps) => {
  const activities = Object.values(props.activities)

  return (
    <GridContainer gap={1}>
      <GridItem xs="1/13" horizontalAlign="end">
        <Button onClick={() => props.onNewActivity()}>New activity</Button>
      </GridItem>
      {activities.map((activity: Activity) => (
        <GridItem xs="1/13">
            <Surface>
              <ActivityCard activity={activity} />
            </Surface>
        </GridItem>
      ))}
    </GridContainer>
  )
}

const WhenNoActivities = (props: ManageActivityListProps) => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <Button onClick={() => props.onNewActivity()}>Create first event</Button>
    </GridItem>
  </GridContainer>
)

export const ManageActivityList = (props: ManageActivityListProps) => {
  return (
    <div data-testid="manage-activity-list">
      <EnumState
        e={props.activities}
        onEmpty={() => <WhenNoActivities {...props} />}
        onPopulated={() => <WhenActivitiesExist {...props} />}
      />
    </div>
  )
}
