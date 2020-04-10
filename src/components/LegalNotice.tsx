import * as React from "react"
import styled from "styled-components";
import {P, H3, Surface, Button} from "../";

const Warning = styled.div`
  background: #fff;
  padding-bottom: 30px;
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
          {isFirstAccept && (
            <>
              <H3>Cookie notice</H3>
              <P>By using ticketbuddy.co.uk, you consent to our cookie and terms and conditions policy.</P>
            </>
          )}
          {!isFirstAccept && newerVersionExists && (
            <>
              <H3>Updated terms and conditions</H3>
              <P>Please review our latest terms and conditions and cookie policy.</P>
            </>
          )}
            <Button data-test-id="accept-legal-btn" sm success onClick={() => props.onAccept()}>I agree</Button>
          </Surface>
        </Warning>
    )}
    </>
  )
}
