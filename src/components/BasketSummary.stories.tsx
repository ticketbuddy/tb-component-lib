import * as React from 'react'
import { BasketSummary } from './BasketSummary'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Basket Summary' }

export const pendingBasket = () => {
  const basket = {...baseBasket}
  basket["status"] = "pending"

  return (
    <ThemeProvider theme={lightTheme}>
      <BasketSummary basket={basket} onUnreserve={(seatId: string) => console.log(seatId)} />
    </ThemeProvider>
  )
}

export const closedBasket = () => {
  const basket = {...baseBasket}
  basket["status"] = "closed"

  return (
    <ThemeProvider theme={lightTheme}>
      <BasketSummary basket={basket} onUnreserve={(seatId: string) => console.log(seatId)} />
    </ThemeProvider>
  )
}

export const reservedBasket = () => {
  const basket = {...baseBasket}
  basket["status"] = "reserved"

  return (
    <ThemeProvider theme={lightTheme}>
      <BasketSummary basket={basket} onUnreserve={(seatId: string) => console.log(seatId)} />
    </ThemeProvider>
  )
}

export const completedBasket = () => {
  const basket = {...baseBasket}
  basket["status"] = "completed"

  return (
    <ThemeProvider theme={lightTheme}>
      <BasketSummary basket={basket} onUnreserve={(seatId: string) => console.log(seatId)} />
    </ThemeProvider>
  )
}

const baseBasket = {
  basket_id: "seeded-basket-3",
  checkout_id: "seeded-checkout-3",
  person_id: "seeded-person-3",
  status: "closed",
  items: [
    {
      item_id: "seeded-product-3.27",
      product: {
        amount: 200,
        title: "Yet another seeded early bird"
      },
      product_id: "seeded-product-3",
      shareholders: [
        {amount: 500, creditor_id: "seeded-creditor-1"}
      ]
    }
  ],
  rejected_items: [
    {
      product: {
        amount: 200,
        title: "Yet another seeded early bird"
      },
      product_id: "seeded-product-3"
    }
  ]
}
