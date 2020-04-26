export type Person = {
  account_id: string| null;
  person_id: string | null;
  "email_verified?": boolean;
  "is_anonymous?": boolean;
  user_status: "anonymous" | "anonymous_with_session" | "verified";
}
