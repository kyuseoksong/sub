export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  nextBillingDate: Date;
  category: SubscriptionCategory;
  isActive: boolean;
  memo?: string;
}

export enum SubscriptionCategory {
  ENTERTAINMENT,
  PRODUCTIVITY,
  LIFESTYLE,
  OTHER
} 