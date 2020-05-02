import * as React from "react"
import {Activity, Image, H2, Surface, Button} from "../";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  activity: Activity
}

export const ActivityCard = ({activity: activity}: ActivityCardProps) => {
  const alternativeActivityLogo = "/alternativeActivityLogo.png"

  return (
    <Surface shadow={10} data-testid="activity-card">
      <Image height="200px" src={activity.logo || alternativeActivityLogo} />
      <Surface padding={1}>
        <H2>{activity.title}</H2>
        <Link to={`/dashboard/event/${activity.activity_id}/dates`}>
          <Button data-testid="manage-dates-btn">Manage Dates</Button>
        </Link>
        <Link to={`/dashboard/event/${activity.activity_id}/edit`}>
          <Button data-testid="edit-activity-btn">Edit</Button>
        </Link>
      </Surface>
    </Surface>
  )
}
