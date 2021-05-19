import React, { useState } from 'react';

import moment from 'moment';
import { firebase } from '../../firebase';
import { useSelectedProjectValue } from '../../context';
import { ProjectOverlay } from '../Task/ProjectOverlay';
import { AddTaskMain } from '../Task/AddTaskMain';

export const Addtask = ({
  showShouldMain = false,
  showQuickAddTask,
  setQucikAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showAddTaskMain, setshowAddTaskMain] = useState(true);
  const [showProjectOverlay, setshowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();

  const addtask = () => {
    const projectid = project || selectedProject;
    let collatedDate = '';

    if (projectid === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (project === 'NEXt_7') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
    }

    console.log(task, '/', selectedProject, '/ /');

    //*If there is task and projectid then call firebase
    return (
      task &&
      projectid &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          task,
          projectid,
          date: collatedDate || taskDate,
          userid: 'G3fWPE0hEeTtTiR88DWQ',
        })
        .then(() => {
          setTask('');
          setProject('');
          //setShowMain(false);
          setshowProjectOverlay(false);
        })
    );
  };

  //console.log('SHOW MAIN => ', showMain);

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
    >
      {
        //*ADD TASK MAIN
        showAddTaskMain && (
          <div
            className="add-task__shallow"
            onClick={() => {
              setShowMain(!showMain);
              setshowAddTaskMain(!showAddTaskMain);
            }}
          >
            <span className="add-task__plus">+</span>
            <span className="add-task__text">Add Task</span>
          </div>
        )
      }
      <ProjectOverlay
        setProject={setProject}
        showProjectOverlay={showProjectOverlay}
        setShowProjectOverlay={setshowProjectOverlay}
      />

      {(showMain || showQuickAddTask) && (
        <AddTaskMain
          task={task}
          setTask={setTask}
          addtask={addtask}
          setShowMain={setShowMain}
          showMain={showMain}
          setTaskDate={setTaskDate}
          showTaskDate={showTaskDate}
          setShowTaskDate={setShowTaskDate}
          setshowProjectOverlay={setshowProjectOverlay}
          showProjectOverlay={showProjectOverlay}
          showAddTaskMain={showAddTaskMain}
          setshowAddTaskMain={setshowAddTaskMain}
        />
      )}
    </div>
  );
};
