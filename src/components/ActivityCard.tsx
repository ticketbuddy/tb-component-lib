import * as React from "react"
import {Activity, Image, H2, Surface, Button} from "../";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  activity: Activity
}

export const ActivityCard = ({activity: activity}: ActivityCardProps) => {
  const alternativeActivityLogo = "/alternativeActivityLogo.png"

  return (
    <Surface shadow={10}>
      <Image height="200px" src={activity.logo || alternativeActivityLogo} />
      <Surface padding={1}>
        <H2>{activity.title}</H2>
        <Link to={`/dashboard/event/${activity.activity_id}/dates`}>
          <Button>Manage Dates</Button>
        </Link>
        <Link to={`/dashboard/event/${activity.activity_id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </Surface>
    </Surface>
  )
}
