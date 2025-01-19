import React from 'react';
import { Recommendation, RecommendationType } from '../../types/analytics';

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

export const RecommendationsList: React.FC<RecommendationsListProps> = ({ recommendations }) => {
  const getRecommendationTypeLabel = (type: RecommendationType): string => {
    const labels: Record<RecommendationType, string> = {
      [RecommendationType.DUPLICATE_SUBSCRIPTION]: '중복 구독',
      [RecommendationType.UNUSED_SUBSCRIPTION]: '미사용 구독',
      [RecommendationType.BETTER_PLAN]: '더 나은 요금제'
    };
    return labels[type];
  };

  return (
    <div className="recommendations-container">
      <h2>구독 최적화 추천</h2>
      <div className="recommendations-list">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="recommendation-item">
            <div className="recommendation-type">
              {getRecommendationTypeLabel(recommendation.type)}
            </div>
            <p className="recommendation-description">
              {recommendation.description}
            </p>
            <div className="potential-savings">
              예상 절감액: ₩{recommendation.potentialSavings.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 