import * as React from "react"
import {ActivityDate, Input, H3, Button, GridItem, GridContainer} from "../";
import { useForm } from 'react-hook-form'

export type SubmitActivityDate = (activity: ActivityDateValues) => void;

export type ActivityDateValues = {
  addr_line_1: string;
  addr_line_2: string;
  postcode: string;
  county: string;
  country: string;
  goes_live?: string;
  starts?: string;
  ends?: string;
}

interface ActivityDateProps {
  activityDate: ActivityDate
  submitActivityDate: SubmitActivityDate
}

export const ActivityDateForm = (props: ActivityDateProps) => {
  const {activityDate} = props
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: ActivityDateValues) => {
    props.submitActivityDate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridContainer gap={1}>
        <GridItem xs="1/13">
          <H3>Location</H3>
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.addr_line_1} data-testid="addr_line_1-input" placeholder="Line 1" name="addr_line_1" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.addr_line_2} data-testid="addr_line_2-input" placeholder="Line 2" name="addr_line_2" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.postcode} data-testid="postcode-input" placeholder="Postcode" name="postcode" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.county} data-testid="county-input" placeholder="County" name="county" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.country} data-testid="country-input" placeholder="Country" name="country" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <H3>Times</H3>
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.goes_live} data-testid="goes_live-input" placeholder="Goes live" name="goes_live" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.starts} data-testid="starts-input" placeholder="Starts" name="starts" ref={register()} />
        </GridItem>
        <GridItem xs="1/13">
          <Input defaultValue={activityDate.ends} data-testid="ends-input" placeholder="Ends" name="ends" ref={register()} />
        </GridItem>

        <GridItem xs="1/13">
          <Button data-testid="submit-activity-date">Save</Button>
        </GridItem>
      </GridContainer>
    </form>
  )
}
