import React, { useEffect } from 'react';

import { CheckBox } from './CheckBox';
import { useTasks } from '../hooks';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { getCollatedTitle, getTitle, collectedTasksExits } from '../helpers';
import { collectedTasks } from '../constants';
import { Addtask } from './Addtask';

export const Tasks = () => {
  const { projects } = useProjectsValue();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  if (projects && selectedProject && !collectedTasksExits(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
    //console.log('project1', projectName);
  }
  if (collectedTasksExits(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collectedTasks, selectedProject).name;
    //console.log('project2', projectName);
  }

  useEffect(() => {
    document.title = `${projectName}:TODOList`;
  });

  // !🔴Debuging
  //console.log(tasks);

  return (
    <div className="tasks">
      <h2 className="project__name">{projectName}</h2>
      <Addtask />
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <CheckBox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
