import React from 'react';
import { Subscription } from '../../types/subscription';

interface SummaryProps {
  subscriptions: Subscription[];
}

export const SubscriptionSummary: React.FC<SummaryProps> = ({ subscriptions }) => {
  const calculateTotalMonthly = () => {
    return subscriptions.reduce((total, sub) => {
      if (!sub.isActive) return total;
      const monthlyAmount = sub.billingCycle === 'yearly' 
        ? sub.price / 12 
        : sub.price;
      return total + monthlyAmount;
    }, 0);
  };

  return (
    <div className="summary-container">
      <h2 className="summary-title">나의 구독 요약</h2>
      <div className="summary-stats">
        <div className="stat-item">
          <span>총 구독 수</span>
          <strong>{subscriptions.filter(s => s.isActive).length}개</strong>
        </div>
        <div className="stat-item">
          <span>월 총액</span>
          <strong>₩{calculateTotalMonthly().toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
}; 