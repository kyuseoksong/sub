import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubscriptionDashboard } from './components/Dashboard/SubscriptionDashboard';
import './styles/dashboard.css';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SubscriptionDashboard userId="test-user" />
  </React.StrictMode>
); 