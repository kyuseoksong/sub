import { Subscription, SubscriptionCategory } from '../types/subscription';

export const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    price: 17000,
    currency: 'KRW',
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-04-15'),
    category: SubscriptionCategory.ENTERTAINMENT,
    isActive: true,
    memo: '기본 멤버십 요금제'
  },
  {
    id: '2',
    name: 'Notion',
    price: 96000,
    currency: 'KRW',
    billingCycle: 'yearly',
    nextBillingDate: new Date('2024-08-01'),
    category: SubscriptionCategory.PRODUCTIVITY,
    isActive: true,
    memo: '개인 프로젝트 관리용'
  },
  {
    id: '3',
    name: 'YouTube Premium',
    price: 14900,
    currency: 'KRW',
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-04-20'),
    category: SubscriptionCategory.ENTERTAINMENT,
    isActive: true,
    memo: '광고 없는 영상 시청'
  },
  {
    id: '4',
    name: 'Spotify',
    price: 13900,
    currency: 'KRW',
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-04-25'),
    category: SubscriptionCategory.ENTERTAINMENT,
    isActive: true,
    memo: '프리미엄 개인 요금제'
  },
  {
    id: '5',
    name: 'GitHub Copilot',
    price: 120000,
    currency: 'KRW',
    billingCycle: 'yearly',
    nextBillingDate: new Date('2024-09-15'),
    category: SubscriptionCategory.PRODUCTIVITY,
    isActive: true,
    memo: '코딩 생산성 향상'
  },
  {
    id: '6',
    name: 'Apple One',
    price: 19900,
    currency: 'KRW',
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-04-30'),
    category: SubscriptionCategory.LIFESTYLE,
    isActive: true,
    memo: 'iCloud + Apple Music + Apple TV+'
  }
]; 