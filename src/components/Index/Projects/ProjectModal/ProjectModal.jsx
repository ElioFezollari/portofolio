import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({
  projectName,
  projectImg,
  projectDescription,
  pages,
  currentPageIndex,
  goToNextPage,
  goToPreviousPage,
  closeModal,
  projectGithub, 
}) => {
  const hasPages = pages && pages.length > 0;
  const currentPage = hasPages ? pages[currentPageIndex] : null;
  const showInitialContent = currentPageIndex === 0 || !hasPages;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>

        {showInitialContent && (
          <>
            <h2>{projectName}</h2>
            <img src={projectImg} alt={projectName} className="modal-img" />
            <p>{projectDescription}</p>
          </>
        )}

        {hasPages && currentPageIndex > 0 && (
          <div className="page-carousel">
            <img
              src={currentPage.img}
              alt={currentPage.subtitle}
              className="carousel-img"
            />
            <h3>{currentPage.subtitle}</h3>
            <p>{currentPage.description}</p>
          </div>
        )}

        {hasPages && (
          <div className="carousel-nav">
            <button
              onClick={goToPreviousPage}
              disabled={currentPageIndex === 0}
              className="carousel-btn"
            >
              Prev
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPageIndex === pages.length - 1}
              className="carousel-btn"
            >
              Next
            </button>
          </div>
        )}

        <div className="github-link">
          <a href={projectGithub} target="_blank" rel="noopener noreferrer">
            <button className="github-btn">View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
