import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <h1>Projects Page</h1>
    </ProjectsContainer>
  );
};

export default Projects; 