import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { colors } from "../styles/colors";

const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: auto;
  height: 160px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  padding-top: 10px;
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

const ProjectCard = ({ project }) => (
  <Card>
    <ProjectImage src={project.image} alt={project.name} />
    <ProjectContent>
      <ProjectTitle>{project.name}</ProjectTitle>
      <StyledButton href={project.inscricaoLink} primary>
        Inscrição
      </StyledButton>
      <StyledButton href={project.editalLink}>Edital (PDF)</StyledButton>
    </ProjectContent>
  </Card>
);

export default ProjectCard;
