import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h1>Contact Page</h1>
    </ContactContainer>
  );
};

export default Contact; 