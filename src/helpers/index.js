import { collectedTasks } from '../constants';

export const collectedTasksExits = (selectedProject) =>
  collectedTasks.find((task) => task.key === selectedProject);
