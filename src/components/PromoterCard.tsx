import * as React from "react"
import {Promoter, Image, H2, Surface, Button} from "../";
import { Link } from "react-router-dom";

interface PromoterCardProps {
  promoter: Promoter
}

export const PromoterCard = ({promoter: promoter}: PromoterCardProps) => {
  const alternativePromoterLogo = "/alternativePromoterLogo.png"

  return (
    <Surface shadow={10} data-testid="promoter-card">
      <Image height="200px" src={promoter.logo || alternativePromoterLogo} />
      <Surface padding={1}>
        <H2>{promoter.title}</H2>
        <Link to={`/dashboard/promoter/${promoter.promoter_id}/edit`}>
          <Button data-testid="edit-promoter-btn">Edit</Button>
        </Link>
        <Link to={`/dashboard/promoter/${promoter.promoter_id}`}>
          <Button data-testid="manage-promoter-events-btn">Events</Button>
        </Link>
      </Surface>
    </Surface>
  )
}
