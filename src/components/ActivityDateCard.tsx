import * as React from "react"
import {ActivityDate, H2, Surface, Button} from "../";
import { Link } from "react-router-dom";

interface ActivityDateCardProps {
  activityDate: ActivityDate
}

export const ActivityDateCard = ({activityDate: activityDate}: ActivityDateCardProps) => {
  return (
    <Surface shadow={10}>
      <Surface padding={1}>
        <H2>An activity date...</H2>
        <Link to={`/dashboard/date/${activityDate.activity_date_id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Link to={`/dashboard/date/${activityDate.activity_date_id}/tickets`}>
          <Button>Tickets</Button>
        </Link>
      </Surface>
    </Surface>
  )
}
