import { SubscriptionCategory } from './subscription';

export interface SpendingAnalysis {
  totalMonthly: number;
  totalYearly: number;
  categoryBreakdown: Record<SubscriptionCategory, number>;
  recommendations: Recommendation[];
}

export interface Recommendation {
  type: RecommendationType;
  description: string;
  potentialSavings: number;
  subscriptionIds: string[];
}

export enum RecommendationType {
  DUPLICATE_SUBSCRIPTION = 'DUPLICATE_SUBSCRIPTION',
  UNUSED_SUBSCRIPTION = 'UNUSED_SUBSCRIPTION',
  BETTER_PLAN = 'BETTER_PLAN'
} 