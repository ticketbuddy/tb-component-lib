import * as React from 'react'
import { BasketSummary } from './BasketSummary'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../theme"

export default { title: 'Basket Summary' }

export const basic = () => (
  <ThemeProvider theme={lightTheme}>
    <BasketSummary basketItems={basketItems} onUnreserve={(seatId: string) => console.log(seatId)} />
  </ThemeProvider>
)

const basketItems = {
  "item_1cc43bae74554c918c03ae3b636363fd.1": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_1cc43bae74554c918c03ae3b636363fd.1",
    "owning_shelf": "activitydate_995f3dc8e96e46ef8911bf0e459650fb",
    "product_id": "product_1cc43bae74554c918c03ae3b636363fd",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "This is a really really really really long ticket title"
  },
  "item_918caa6470b7482b99897b923dddc002.1": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_918caa6470b7482b99897b923dddc002.1",
    "owning_shelf": "activitydate_213229f21bf24ce980ee2e6b9534b2a2",
    "product_id": "product_918caa6470b7482b99897b923dddc002",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "early bird"
  },
  "item_918caa6470b7482b99897b923dddc002.2": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_918caa6470b7482b99897b923dddc002.2",
    "owning_shelf": "activitydate_213229f21bf24ce980ee2e6b9534b2a2",
    "product_id": "product_918caa6470b7482b99897b923dddc002",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "early bird"
  },
  "item_918caa6470b7482b99897b923dddc002.3": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_918caa6470b7482b99897b923dddc002.3",
    "owning_shelf": "activitydate_213229f21bf24ce980ee2e6b9534b2a2",
    "product_id": "product_918caa6470b7482b99897b923dddc002",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "early bird"
  },
  "item_918caa6470b7482b99897b923dddc002.4": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_918caa6470b7482b99897b923dddc002.4",
    "owning_shelf": "activitydate_213229f21bf24ce980ee2e6b9534b2a2",
    "product_id": "product_918caa6470b7482b99897b923dddc002",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "early bird"
  },
  "item_918caa6470b7482b99897b923dddc002.5": {
    "amount": 550,
    "customer_id": "01fc44b3d48446ff97242ae353a91787",
    "item_id": "item_918caa6470b7482b99897b923dddc002.5",
    "owning_shelf": "activitydate_213229f21bf24ce980ee2e6b9534b2a2",
    "product_id": "product_918caa6470b7482b99897b923dddc002",
    "shareholders": {
      "creditor_01fc44b3d48446ff97242ae353a91787": 330,
      "creditor_7242353a9178701fc44f9b3d48ae446f": 220
    },
    "status": "reserved",
    "title": "early bird"
  }
}
