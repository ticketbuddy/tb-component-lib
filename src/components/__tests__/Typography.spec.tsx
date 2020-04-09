import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { P, H1, H2, H3, H4, H5 } from '../../index'

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

describe("Headings", () => {
  test('Heading 1', async () => {
    const { getByText } = render(<H1>This is a heading</H1>)
    expect(getByText('This is a heading')).toBeInTheDocument()
  })

  test('Heading 2', async () => {
    const { getByText } = render(<H2>This is a heading</H2>)
    expect(getByText('This is a heading')).toBeInTheDocument()
  })

  test('Heading 3', async () => {
    const { getByText } = render(<H3>This is a heading</H3>)
    expect(getByText('This is a heading')).toBeInTheDocument()
  })

  test('Heading 4', async () => {
    const { getByText } = render(<H4>This is a heading</H4>)
    expect(getByText('This is a heading')).toBeInTheDocument()
  })

  test('Heading 5', async () => {
    const { getByText } = render(<H5>This is a heading</H5>)
    expect(getByText('This is a heading')).toBeInTheDocument()
  })
})
