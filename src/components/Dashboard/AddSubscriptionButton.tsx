import React, { useState } from 'react';
import { AddSubscriptionModal } from './AddSubscriptionModal';
import { Subscription } from '../../types/subscription';

interface AddSubscriptionButtonProps {
  onSubscriptionAdd: (subscription: Omit<Subscription, 'id'>) => void;
}

export const AddSubscriptionButton: React.FC<AddSubscriptionButtonProps> = ({ onSubscriptionAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className="btn-add-subscription" onClick={handleAddClick}>
        <span className="plus-icon">+</span>
        새 구독 추가
      </button>
      <AddSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={onSubscriptionAdd}
      />
    </>
  );
}; 