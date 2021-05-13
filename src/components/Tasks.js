import React from 'react';
import { CheckBox } from './CheckBox';
import { useTasks } from '../hooks';

export const Tasks = () => {
  const { tasks } = useTasks('1');

  let projectName = 'TEST';

  console.log(tasks);

  return (
    <div className="tasks">
      <h2 className="project__name">{projectName}</h2>
      <ul className="task__list">
        {tasks.map((task) => {
          return (
            <li key={`${task.id}`}>
              {/* <CheckBox id={task.id} /> */}
              <span>{task.task}</span>
            </li>
          );
        })}

        {/* {tasks.map((task) => (
          <li key={`${task.id}`}>
            <CheckBox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
