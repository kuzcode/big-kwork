import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e2a78 0%, #2e3a8c 100%);
`;

const SignInBox = styled.div`
  background: rgba(20, 30, 60, 0.95);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  padding: 48px 32px;
  min-width: 340px;
  color: #fff;
`;

const SignIn: React.FC = () => {
  return (
    <SignInContainer>
      <SignInBox>
        <h2>Sign In</h2>
        {/* Здесь будет форма входа */}
      </SignInBox>
    </SignInContainer>
  );
};

export default SignIn; 