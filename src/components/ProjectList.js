import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map((project) => {
          const { name, id, technologies } = project;
          return (
            <ProjectItem
              key={id}
              id={id}
              name={name}
              technologies={technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
