import * as React from "react"
import styled from "styled-components";
import {P, H4, Surface, Button} from "../";
import {GridContainer, GridItem} from "../"

const Warning = styled.div`
  padding-bottom: 15px;
  ${(props) => `border-bottom: 5px solid ${props.theme.primaryColorDark};`};
`;


interface LegalNoticeProps {
  userAcceptedVersion: number
  latestVersion: number,
  onAccept: () => void
}

export const LegalNotice = (props: LegalNoticeProps) => {
  const newerVersionExists = props.userAcceptedVersion < props.latestVersion;
  const isFirstAccept = props.userAcceptedVersion === 0;

  return (
    <>
    {(isFirstAccept || newerVersionExists) && (
        <Warning data-test-id="legal-notice">
          <Surface>
          <GridContainer gap={5}>
            <GridItem xs="3/7">
            {isFirstAccept && (
              <>
                <H4>Cookie notice</H4>
                <P sm>By using ticketbuddy.co.uk, you consent to our cookie and terms and conditions policy.</P>
              </>
            )}
            {!isFirstAccept && newerVersionExists && (
              <>
                <H4>Updated terms and conditions</H4>
                <P sm>Please review our latest terms and conditions and cookie policy.</P>
              </>
            )}
            </GridItem>
            <GridItem xs="7/10" horizontalAlign="right" vertialAlign="center">
              <Button data-test-id="accept-legal-btn" sm  onClick={() => props.onAccept()}>I agree</Button>
            </GridItem>
            </GridContainer>
          </Surface>
        </Warning>
    )}
    </>
  )
}
