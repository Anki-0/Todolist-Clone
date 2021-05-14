import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndivisualProject } from './IndivisualProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  console.log('🚗', projects);
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectid}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <IndivisualProject project={project} />
      </li>
    ))
  );
};
