import * as React from 'react'
import {P} from './Typography'

export default { title: 'Typography' }

export const paragraph = () => (
  <>
    <P>This is a standard paragraph</P>
    <P sm>This is a small paragraph</P>
    <P muted>This is a muted paragraph</P>
  </>
);
