import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();

  //console.log(projects, showProjectOverlay);
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li
              key={project.projectid}
              onClick={() => {
                setProject(project.projectid);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
