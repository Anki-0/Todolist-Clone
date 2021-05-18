import React, { useEffect } from 'react';

import { CheckBox } from './CheckBox';
import { useTasks } from '../hooks';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { getCollatedTitle, getTitle, collectedTasksExits } from '../helpers';
import { collectedTasks } from '../constants';
import { Addtask } from './Addtask';
import { BiComment } from 'react-icons/bi';
import { RiUserShared2Line } from 'react-icons/ri';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

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
  //console.log(selectedProject);

  return (
    <div className="tasks">
      <div className="tasks__header">
        <h2 className="project__name">{projectName}</h2>
        <div className="tasks__header__controls">
          <div className="comments">
            <BiComment />
            <span>Comments</span>
          </div>
          <div className="share">
            <RiUserShared2Line />
            <span>Share</span>
          </div>
          <div className="sort">
            <FaSortAmountDownAlt />
            <span>Sort</span>
          </div>
          <div className="actions">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="tasks__lists">
        <ul className="tasks__list">
          {tasks.map((task) => (
            <li key={`${task.id}`}>
              <CheckBox id={task.id} />
              <span>{task.task}</span>
            </li>
          ))}
        </ul>
        <Addtask />
      </div>
    </div>
  );
};
