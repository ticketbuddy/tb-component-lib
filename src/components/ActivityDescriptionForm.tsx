import * as React from "react"
import {Activity, TextArea, Input, Button, H2, Error, GridItem, GridContainer} from "../";
import { useForm } from 'react-hook-form'

export type SubmitActivityDescription = (activity: ActivityDescriptionValues) => void;

export type ActivityDescriptionValues = {
  title: string;
  description: string;
}

interface ActivityDescriptionProps {
  activity: Activity,
  submitActivityDescription: SubmitActivityDescription
}

export const ActivityDescriptionForm = (props: ActivityDescriptionProps) => {
  const {activity} = props
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values: ActivityDescriptionValues) => {
    props.submitActivityDescription(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer gap={1}>
        <GridItem xs="1/13">
          <H2 data-testid="activity-description-title">Edit {activity.title}</H2>
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activity.title} data-testid="title-input" error={!!errors.title} placeholder="Title" name="title" ref={register({ required: true })} />
          {errors.title && <Error>An event must have a title!</Error>}
        </GridItem>
        <GridItem xs="1/13">
          <TextArea defaultValue={activity.description} data-testid="description-input" placeholder="Description" name="description" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Button data-testid="submit-activity-description">Save</Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}
