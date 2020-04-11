import * as React from 'react'
import {render, act, fireEvent} from '@testing-library/react'
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

    await act(async () => {
      getByTestId("submit-sign-in").click()
    })

    expect(getByTestId('password-error')).toBeInTheDocument()
    expect(getByTestId('email-error')).toBeInTheDocument()
  })

  test("when form is submitted and onIncorrectCredentials callback is called", async () => {
    const mockOnSubmit = jest.fn((_value, onIncorrectCredentials) => {
      onIncorrectCredentials();
    });

    const { getByTestId, queryByTestId } = render(<SignInForm submitSignIn={mockOnSubmit} />);

    fireEvent.change(getByTestId("email-input"), { target: { value: 'tester@ticketbuddy.co.uk' } });
    fireEvent.change(getByTestId("password-input"), { target: { value: 'alongpass' } });

    await act(async () => {
      getByTestId("submit-sign-in").click();
    });

    expect(getByTestId('credentials-error')).toBeInTheDocument();
    expect(queryByTestId('password-error')).toBeNull();
    expect(queryByTestId('email-error')).toBeNull();

    expect(mockOnSubmit).toHaveBeenCalled();
  })
})
