import * as React from "react"
import {Image, H2, Surface} from "../";

type Promoter = {
  id: string;
  title: string;
  logo?: string;
}

interface PromoterCardProps {
  promoter: Promoter
}

export const PromoterCard = ({promoter: promoter}: PromoterCardProps) => {
  const alternativePromoterLogo = "/alternativePromoterLogo.png"

  return (
    <Surface shadow={10}>
      <Image height="200px" src={promoter.logo || alternativePromoterLogo} />
      <Surface padding={1}>
        <H2>{promoter.title}</H2>
      </Surface>
    </Surface>
  )
}
