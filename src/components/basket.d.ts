type BasketShareholder = {
  amount: number;
  creditor_id: string;
}

type BasketProduct = {
  title: string;
  amount: number;
}

export type BasketItem = {
  item_id: string;
  product: BasketProduct;
  product_id: string;
  shareholders: BasketShareholder[];
}

type RejectedBasketItem = {
  product_id: string;
  product: BasketProduct;
}

export type Basket = {
  basket_id: string;
  status: string;
  checkout_id: string;
  person_id: string;
  items: BasketItem[],
  rejected_items: RejectedBasketItem[]
}
