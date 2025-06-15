import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a183d 0%, #1a2a5c 100%);
  color: #fff;
  padding: 32px 0;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      {/* Здесь будет контент дашборда */}
    </DashboardContainer>
  );
};

export default Dashboard; 