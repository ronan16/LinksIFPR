import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

const ProjectsContainer = ({ projects }) => (
  <Container>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </Container>
);

export default ProjectsContainer;
