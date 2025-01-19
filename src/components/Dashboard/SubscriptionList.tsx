import React, { useState } from 'react';
import { Subscription, SubscriptionCategory } from '../../types/subscription';
import { EditSubscriptionModal } from './EditSubscriptionModal';
import { AddSubscriptionButton } from './AddSubscriptionButton';

interface ListProps {
  subscriptions: Subscription[];
  onSubscriptionAdd: (subscription: Omit<Subscription, 'id'>) => void;
  onSubscriptionEdit: (subscriptionId: string, updatedData: Omit<Subscription, 'id'>) => void;
  onSubscriptionDelete: (subscriptionId: string) => void;
}

export const SubscriptionList: React.FC<ListProps> = ({ 
  subscriptions, 
  onSubscriptionAdd,
  onSubscriptionEdit,
  onSubscriptionDelete 
}) => {
  const [editingSubscription, setEditingSubscription] = useState<Subscription | null>(null);

  const handleEditClick = (subscription: Subscription) => {
    setEditingSubscription(subscription);
  };

  const handleEditClose = () => {
    setEditingSubscription(null);
  };

  const getCategoryLabel = (category: SubscriptionCategory): string => {
    return {
      [SubscriptionCategory.ENTERTAINMENT]: '엔터테인먼트',
      [SubscriptionCategory.PRODUCTIVITY]: '생산성',
      [SubscriptionCategory.LIFESTYLE]: '라이프스타일',
      [SubscriptionCategory.OTHER]: '기타'
    }[category];
  };

  return (
    <div className="subscription-list">
      <div className="subscription-list-header">
        <h2>📋 구독 목록</h2>
        <AddSubscriptionButton onSubscriptionAdd={onSubscriptionAdd} />
      </div>
      <div className="subscription-grid">
        {subscriptions.map(subscription => (
          <div key={subscription.id} className="subscription-card">
            <div className="subscription-card-header">
              <h3>{subscription.name}</h3>
              <span className="category-badge">
                {getCategoryLabel(subscription.category)}
              </span>
            </div>
            <div className="subscription-card-content">
              <div className="subscription-price">
                {subscription.price.toLocaleString()} / 
                {subscription.billingCycle === 'monthly' ? '월' : '년'}
              </div>
              <div className="subscription-date">
                다음 결제일: {new Date(subscription.nextBillingDate).toLocaleDateString()}
              </div>
              {subscription.memo && (
                <div className="subscription-memo">
                  <span className="memo-label">메모</span>
                  <p>{subscription.memo}</p>
                </div>
              )}
            </div>
            <div className="subscription-card-actions">
              <button 
                className="btn-edit"
                onClick={() => handleEditClick(subscription)}
              >
                수정
              </button>
              <button 
                className="btn-delete"
                onClick={() => onSubscriptionDelete(subscription.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingSubscription && (
        <EditSubscriptionModal
          isOpen={true}
          onClose={handleEditClose}
          onEdit={onSubscriptionEdit}
          subscription={editingSubscription}
        />
      )}
    </div>
  );
}; 