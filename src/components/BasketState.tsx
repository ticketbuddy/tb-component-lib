import {Basket} from "../"

export const BasketState = ({
  b,
  onAnonymous,
  onAnonymousWithSession,
  onVerified
}: {
  b: Basket,
  onPending: () => any;
  onCompleted: () => any;
  onReserved: () => any;
  onClosed: () => any;
}) => {
  if(b.status == "pending") return onPending()
  if(b.status == "closed") return onClosed()
  if(b.status == "completed") return onCompleted()

  return onReserved();
};
