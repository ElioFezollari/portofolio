import React, { useState } from "react";
import "./ProjectCard.css";
import github from "../../../../assets/github.svg";
import ProjectModal from "../ProjectModal/ProjectModal";
const ProjectCard = ({
  projectName,
  projectImg,
  projectTechnologies,
  projectType,
  projectDescription,
  projectGithub,
  pages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  return (
    <>
      <a className="project-link" onClick={openModal}>
        <div className="project-card">
          <div className="project-img-container">
            <img
              className="project-img"
              src={projectImg}
              alt="image of one of my projects"
            />
          </div>
          <div className="project-info">
            <div className="project-header-div">
              <h3>{projectName}</h3>
            </div>
            <div className="project-tech-container">
              {projectTechnologies.techimg.map((projectTech, index) => (
                <img
                  className="project-tech-img"
                  src={projectTech}
                  alt={projectTechnologies.name[index]}
                  key={index}
                />
              ))}
            </div>

            <hr />
            <div className="project-type-div">
              <h4>Project Type: {projectType}</h4>
              <a href={projectGithub}>
                <img src={github} alt="Picture of github" />
              </a>
            </div>
            <hr />
            <p>{projectDescription}</p>
          </div>
        </div>
      </a>

      {isModalOpen && (
        <ProjectModal
          projectName={projectName}
          projectImg={projectImg}
          projectDescription={projectDescription}
          pages={pages}
          currentPageIndex={currentPageIndex}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          closeModal={closeModal}
          projectGithub={projectGithub}
        />
      )}
    </>
  );
};

export default ProjectCard;
