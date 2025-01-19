import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Subscription, SubscriptionCategory } from '../../types/subscription';

interface AddSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (subscription: Omit<Subscription, 'id'>) => void;
}

type SubscriptionFormData = {
  name: string;
  price: string;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  nextBillingDate: string;
  category: SubscriptionCategory;
  isActive: boolean;
  memo: string;
};

export const AddSubscriptionModal: React.FC<AddSubscriptionModalProps> = ({
  isOpen,
  onClose,
  onAdd
}) => {
  const [formData, setFormData] = useState<SubscriptionFormData>({
    name: '',
    price: '',
    currency: 'KRW',
    billingCycle: 'monthly',
    nextBillingDate: '',
    category: SubscriptionCategory.OTHER,
    isActive: true,
    memo: ''
  });

  useEffect(() => {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modalOverlay?.classList.add('active');
      }, 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay?.classList.remove('active');
    modalOverlay?.classList.add('closing');
    document.body.style.overflow = '';
    setTimeout(onClose, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      price: Number(formData.price),
      nextBillingDate: new Date(formData.nextBillingDate),
      billingCycle: formData.billingCycle
    });
    handleClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>새 구독 추가</h2>
          <button className="btn-close" onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-scroll-container">
          <form onSubmit={handleSubmit} className="subscription-form">
            <div className="form-group">
              <label htmlFor="name">서비스 이름</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">가격</label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="billingCycle">결제 주기</label>
              <select
                id="billingCycle"
                value={formData.billingCycle}
                onChange={e => setFormData({...formData, billingCycle: e.target.value as 'monthly' | 'yearly'})}
              >
                <option value="monthly">월간</option>
                <option value="yearly">연간</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">카테고리</label>
              <select
                id="category"
                value={formData.category}
                onChange={e => setFormData({...formData, category: Number(e.target.value)})}
              >
                <option value={SubscriptionCategory.ENTERTAINMENT}>엔터테인먼트</option>
                <option value={SubscriptionCategory.PRODUCTIVITY}>생산성</option>
                <option value={SubscriptionCategory.LIFESTYLE}>라이프스타일</option>
                <option value={SubscriptionCategory.OTHER}>기타</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nextBillingDate">다음 결제일</label>
              <input
                type="date"
                id="nextBillingDate"
                value={formData.nextBillingDate}
                onChange={e => setFormData({...formData, nextBillingDate: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="memo">메모 (20자 이내)</label>
              <textarea
                id="memo"
                value={formData.memo}
                onChange={e => {
                  if (e.target.value.length <= 20) {
                    setFormData({...formData, memo: e.target.value})
                  }
                }}
                placeholder="구독 관련 메모를 입력하세요"
                rows={2}
                maxLength={20}
              />
              <span className="char-count">{formData.memo.length}/20</span>
            </div>

            <div className="modal-actions">
              <button type="button" className="btn-cancel" onClick={handleClose}>
                취소
              </button>
              <button type="submit" className="btn-submit">
                추가
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') || document.body
  );
}; 