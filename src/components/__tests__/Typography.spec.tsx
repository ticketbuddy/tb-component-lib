import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { P } from '../../index'

describe("Paragraph", () => {
  test('Basic paragraph displays text', async () => {
    const { getByText } = render(<P>This is a paragraph</P>)
    expect(getByText('This is a paragraph')).toBeInTheDocument()
  })

  test('Small paragraph displays text', async () => {
    const { getByText } = render(<P sm>This is a paragraph</P>)
    expect(getByText('This is a paragraph')).toBeInTheDocument()
  })

  test('Muted paragraph displays text', async () => {
    const { getByText } = render(<P muted>This is a paragraph</P>)
    expect(getByText('This is a paragraph')).toBeInTheDocument()
  })
})
