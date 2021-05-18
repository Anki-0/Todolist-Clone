import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndivisualProject } from './IndivisualProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  //console.log('🔴Project.js =>', projects);
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectid}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectid
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectid);
          setSelectedProject(project.projectid);
        }}
      >
        <IndivisualProject project={project} />
      </li>
    ))
  );
};
