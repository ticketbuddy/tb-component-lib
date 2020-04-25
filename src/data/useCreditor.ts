import {useTbApi} from "./useTbApi"
import tbSdk from "tb-sdk"

type RawCreditor = {
  creditor_id: string;
  stripe_account_id: string | null;
  pending_funds: number;
}

type Creditor = {
  creditorId: string;
  stripeAccountId: string | null;
  pendingFunds: number;
}

type FetchError = {
  error: true,
  message: string;
}

export const useCreditor = (): (Creditor | FetchError | null) => {
  const [waiting, statusCode, content] = useTbApi<RawCreditor>(tbSdk.getCurrentCreditor());

  if(waiting) return null;

  switch (statusCode) {
    case 403:
      return {error: true, message: "Permission denied."}

    case 200:
      return {
        creditorId: content.creditor_id,
        stripeAccountId: content.stripe_account_id,
        pendingFunds: content.pending_funds
      }

    default:
      return {
        error: true,
        message: "Something went wrong."
      }
  }
}
