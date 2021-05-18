import { useEffect, useState } from 'react';
import moment from 'moment';

import { firebase } from '../firebase';
import { collectedTasksExits } from '../helpers';

const isEqual = (project1, project2) => {
  if (project1.length !== project2.length) return false;
  else {
    for (var i = 0; i < project1.length; i++) {
      if (project1['name'] !== project2['name']) return false;
      if (project1['userid'] !== project2['userid']) return false;
      if (project1['projectid'] !== project2['projectid']) return false;
      if (project1['docId'] !== project2['docId']) return false;
    }
  }
  return true;
};

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userid', '==', 'G3fWPE0hEeTtTiR88DWQ');

    unsubscribe =
      selectedProject && !collectedTasksExits(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectid', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      // !Debuging
      //console.log(snapshot);
      const newTasks = snapshot.docs.map((task) => {
        // !Debuging
        // console.log('🚧 Task ->', task);

        return {
          id: task.id,
          ...task.data(),
        };
      });

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userid', '==', 'G3fWPE0hEeTtTiR88DWQ')
      .orderBy('projectid')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        //!🔴Debuging
        //console.log('👍useProject Hook =>', allProjects, '\n\n\n', projects);

        // if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
        //   setProjects(allProjects);
        // }
        if (!isEqual(allProjects, projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
