import "./ProjectCard.css";
import github from "../../../../assets/github.svg";

const ProjectCard = ({
  projectName,
  projectImg,
  projectTechnologies,
  projectType,
  projectDescription,
  projectGithub,
}) => {
  return (
    <a className="project-link" href={projectGithub}>
      <div className="project-card">
        <div className="project-header-div">
          <h3>{projectName}</h3>
        </div>
        <img
          className="project-img"
          src={projectImg}
          alt="image of one of my projects"
        />
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
          <h4>Project Type: {projectType}</h4>{" "}
          <a href={projectGithub}>
            <img src={github} alt="Picture of github" />
          </a>
        </div>
        <hr />
        <p>{projectDescription}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
