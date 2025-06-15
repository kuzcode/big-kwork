import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h1>About Page</h1>
    </AboutContainer>
  );
};

export default About; 