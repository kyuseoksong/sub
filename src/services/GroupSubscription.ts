import { Subscription } from '../types/subscription';

interface GroupSubscription extends Subscription {
  members: string[];
  costPerMember: number;
  ownerUserId: string;
  sharingType: 'equal' | 'custom';
}

class GroupSubscriptionManager {
  async createGroupSubscription(subscription: GroupSubscription): Promise<void> {
    // 그룹 구독 생성 로직
  }

  async inviteMember(subscriptionId: string, email: string): Promise<void> {
    // 멤버 초대 로직
  }
} 