import { collectedTasks } from '../constants';

export const collectedTasksExits = (selectedProjects) => {
  collectedTasks.find((task) => task.key === selectedProjects);
};
