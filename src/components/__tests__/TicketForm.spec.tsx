import * as React from 'react'
import {render, act, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { TicketForm } from '../TicketForm'

const ticket = {
  product_id: "product-12345",
  title: "",
  amount: 0,
  quantity: 0
}

describe("TicketForm", () => {
  test("when form is submitted, values are parsed before callback is called", async () => {
    const mockSubmitTicket = jest.fn();

    const { getByTestId, queryByTestId } = render(<TicketForm ticket={ticket} leadCreditorId={"creditor-12345"} submitTicket={mockSubmitTicket} />);

    fireEvent.change(getByTestId("title-input"), { target: { value: 'Early bird' } });
    fireEvent.change(getByTestId("amount-input"), { target: { value: '90000' } });
    fireEvent.change(getByTestId("quantity-input"), { target: { value: '300' } });

    await act(async () => {
      getByTestId("submit-ticket").click();
    });

    expect(queryByTestId('title-error')).toBeNull();
    expect(queryByTestId('amount-error')).toBeNull();
    expect(queryByTestId('quantity-error')).toBeNull();

    expect(mockSubmitTicket).toHaveBeenCalledWith({
      shareholders: {
        "creditor-12345": 90000
      },
      quantity: 300,
      title: "Early bird"
    });
  })
})
