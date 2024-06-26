export type UserSubscription = {
  UserId: string;
  StripeCustomerId: string;
  StripeSubscriptionId: string;
  StripePriceId: string;
  StripeCurrentPeriodEnd: string;
  Id: number;
  Status: string;
};
