import "../assets/css/project_card.css";
import React from "react";

const ProjectCard = ({ style, project, isWebsites }) => {
  return project ? (
    <div className="project_card_container" style={style}>
      <h1
        className="skills_card_title project_title"
        style={{ textAlign: "center" }}
      >
        {project.title}
      </h1>
      <div className=" project_desc">
        {project.desc}

        <h4>Key Features</h4>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="project_btn_container">
        {isWebsites ? (
          <React.Fragment>
            <a href={project.site_link} className="project_btn" target="_blank">
              visit site
            </a>
            <a href={project.code_link} className="project_btn" target="_blank">
              source code
            </a>
          </React.Fragment>
        ) : (
          <a href={project.site_link} className="project_btn" target="_blank">
            Play Store link
          </a>
        )}
      </div>
    </div>
  ) : null;
};

export default ProjectCard;
