import React from 'react';
import styled from 'styled-components';

const BillingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a2a5c 0%, #2e3a8c 100%);
  color: #fff;
  padding: 32px 0;
`;

const Billing: React.FC = () => {
  return (
    <BillingContainer>
      <h2>Billing</h2>
      {/* Здесь будет контент биллинга */}
    </BillingContainer>
  );
};

export default Billing; 