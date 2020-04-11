import * as React from "react"
import {Promoter, TextArea, Input, Button, H2, Error, GridItem, GridContainer} from "../";
import { useForm } from 'react-hook-form'

export type SubmitPromoterDescription = (promoter: PromoterDescriptionValues) => void;

export type PromoterDescriptionValues = {
  title: string;
  description: string;
}

interface PromoterDescriptionProps {
  promoter: Promoter,
  submitPromoterDescription: SubmitPromoterDescription
}

export const PromoterDescriptionForm = (props: PromoterDescriptionProps) => {
  const {promoter} = props
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values: PromoterDescriptionValues) => {
    props.submitPromoterDescription(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer gap={1}>
        <GridItem xs="1/13">
          <H2 data-testid="promoter-description-title">Edit {promoter.title}</H2>
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={promoter.title} data-testid="title-input" error={!!errors.title} placeholder="Title" name="title" ref={register({ required: true })} />
          {errors.title && <Error>A promoter must have a title</Error>}
        </GridItem>
        <GridItem xs="1/13">
          <TextArea defaultValue={promoter.description} data-testid="description-input" placeholder="Description" name="description" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Button data-testid="submit-promoter-description">Save</Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}
