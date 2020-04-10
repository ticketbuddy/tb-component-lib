import * as React from 'react'
import {render, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import { SignInForm } from '../SignInForm'

describe("SignInForm", () => {
  test('renders the sign in form', async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm submitSignIn={mockOnSubmit} />)

    expect(getByTestId('sign-in-title')).toHaveTextContent('Sign In')
  })

  test("when no email or password is provided", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm submitSignIn={mockOnSubmit} />)

    // NOTE: form validation is async in react-hook-form
    await act(async () => {
      getByTestId("submit-sign-in").click()
    })

    expect(getByTestId('password-error')).toBeInTheDocument()
    expect(getByTestId('email-error')).toBeInTheDocument()

  })
})
