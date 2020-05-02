import * as React from "react"
import {EnumState, ActivityDateCard, Button, Surface, GridContainer, GridItem, ActivityDate} from "../";

type ActivityDateList = {
  [activityDateId: string]: ActivityDate
}

interface ManageActivityDateListProps {
  onNewActivityDate: () => void;
  activityDates: ActivityDateList
}

const WhenActivityDateExists = (props: ManageActivityDateListProps) => {
  const activityDates = Object.values(props.activityDates)

  return (
    <GridContainer gap={1}>
      <GridItem xs="1/13" horizontalAlign="end">
        <Button onClick={() => props.onNewActivityDate()}>New date</Button>
      </GridItem>
      {activityDates.map((activityDate: ActivityDate) => (
        <GridItem xs="1/13">
            <Surface>
              <ActivityDateCard activityDate={activityDate} />
            </Surface>
        </GridItem>
      ))}
    </GridContainer>
  )
}

const WhenNoActivityDates = (props: ManageActivityDateListProps) => (
  <GridContainer gap={1}>
    <GridItem xs="1/13" horizontalAlign="center">
      <Button onClick={() => props.onNewActivityDate()}>Create first date</Button>
    </GridItem>
  </GridContainer>
)

export const ManageActivityDateList = (props: ManageActivityDateListProps) => {
  return (
    <div data-testid="manage-activity-date-list">
      <EnumState
        e={props.activityDates}
        onEmpty={() => <WhenNoActivityDates {...props} />}
        onPopulated={() => <WhenActivityDateExists {...props} />}
      />
    </div>
  )
}
