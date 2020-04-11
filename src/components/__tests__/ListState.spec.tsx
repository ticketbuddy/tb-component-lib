import * as React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { EnumState } from '../EnumState'

const onEmpty = () => <p>List is empty</p>
const onPopulated = () => <p>List is NOT empty</p>

describe("EnumState - list", () => {
  test("when list is empty", () => {
    const {getByText} = render(<EnumState e={[]} onEmpty={onEmpty} onPopulated={onPopulated} />)
    expect(getByText('List is empty')).toBeInTheDocument()
  })

  test("when list is has content", () => {
    const {getByText} = render(<EnumState e={["item"]} onEmpty={onEmpty} onPopulated={onPopulated} />)
    //
    expect(getByText('List is NOT empty')).toBeInTheDocument()
  })
})

describe("EnumState - map", () => {
  test("when map is empty", () => {
    const {getByText} = render(<EnumState e={{}} onEmpty={onEmpty} onPopulated={onPopulated} />)
    expect(getByText('List is empty')).toBeInTheDocument()
  })

  test("when map is has content", () => {
    const {getByText} = render(<EnumState e={{a: "item"}} onEmpty={onEmpty} onPopulated={onPopulated} />)
    //
    expect(getByText('List is NOT empty')).toBeInTheDocument()
  })
})
