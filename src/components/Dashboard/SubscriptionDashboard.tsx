import React, { useState, useEffect } from 'react';
import { Subscription } from '../../types/subscription';
import { SubscriptionSummary } from './SubscriptionSummary';
import { SubscriptionList } from './SubscriptionList';
import { mockSubscriptions } from '../../data/mockData';

interface DashboardProps {
  userId: string;
}

export const SubscriptionDashboard: React.FC<DashboardProps> = ({ userId }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptionData();
  }, [userId]);

  const fetchSubscriptionData = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptions(mockSubscriptions);
    } catch (error) {
      console.error('구독 정보를 불러오는데 실패했습니다:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscriptionAdd = (newSubscription: Omit<Subscription, 'id'>) => {
    const subscription: Subscription = {
      ...newSubscription,
      id: `subscription-${Date.now()}`
    };
    setSubscriptions(prev => [...prev, subscription]);
  };

  const handleSubscriptionDelete = (subscriptionId: string) => {
    if (window.confirm('정말 이 구독을 해지하시겠습니까?')) {
      setSubscriptions(prev => prev.filter(sub => sub.id !== subscriptionId));
    }
  };

  const handleSubscriptionEdit = (
    subscriptionId: string, 
    updatedData: Omit<Subscription, 'id'>
  ) => {
    setSubscriptions(prev => prev.map(sub => 
      sub.id === subscriptionId 
        ? { ...updatedData, id: subscriptionId }
        : sub
    ));
  };

  return (
    <div className="dashboard-container">
      {loading ? (
        <div className="loading-container">
          <span>구독 정보를 불러오는 중입니다...</span>
        </div>
      ) : (
        <>
          <SubscriptionSummary subscriptions={subscriptions} />
          <SubscriptionList 
            subscriptions={subscriptions} 
            onSubscriptionAdd={handleSubscriptionAdd}
            onSubscriptionEdit={handleSubscriptionEdit}
            onSubscriptionDelete={handleSubscriptionDelete}
          />
        </>
      )}
    </div>
  );
}; 