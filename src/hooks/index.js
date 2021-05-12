import { useEffect, useState } from 'react';
import moment from 'moment';

import { firebase } from '../firebase';
import { collectedTasksExits } from '../helpers';

export const useTask = (selectedProjects) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let DB = firebase
      .firestore()
      .collection('tasks')
      .where('userid', '==', 'G3fWPE0hEeTtTiR88DWQ ');

    DB =
      selectedProjects && !collectedTasksExits(selectedProjects)
        ? (DB = DB.where('pojectid', '==', selectedProjects))
        : selectedProjects === 'TODAY'
        ? (DB = DB.where('date', '==', moment().format('DD/MM/YYYY')))
        : DB === 'INBOX' || DB === 0
        ? (DB = DB.where('date', '==', ''))
        : DB;

    DB = DB.onSnapshot((snapshot) => {
      const newTasks = snapshot.doc.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(selectedProjects === 'NEXT_7')
        ? newTasks.filter(
            (task) =>
              moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 &&
              task.achived !== false
          )
        : newTasks.filter((task) => task.achived !== true);

      setArchivedTasks(newTasks.filter((tasks) => tasks.achived !== false));
    });

    return () => DB();
  }, [selectedProjects]);

  return [tasks, archivedTasks];
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userid', '==', 'G3fWPE0hEeTtTiR88DWQ')
      .orderBy('projectid')
      .then((snapshot) => {
        const allProjects = snapshot.doc.map((project) => ({
          ...project.data(),
          docID: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return [projects, setProjects];
};
