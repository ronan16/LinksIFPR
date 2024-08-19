import React from "react";
import Header from "./Header";
import ProjectsContainer from "./ProjectsContainer";

const LinksPage = ({ projects }) => (
  <>
    <Header />
    <ProjectsContainer projects={projects} />
  </>
);

export default LinksPage;
