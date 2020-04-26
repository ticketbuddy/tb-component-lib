import {Person} from "../"

export const PersonState = ({
  p,
  onAnonymous,
  onAnonymousWithSession,
  onVerified
}: {
  p: Person,
  onAnonymous: () => any;
  onAnonymousWithSession: () => any;
  onVerified: () => any;
}) => {
  if(p.user_status == "anonymous") return onAnonymous()
  if(p.user_status == "anonymous_with_session") return onAnonymousWithSession()

  return onVerified();
};
