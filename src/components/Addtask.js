import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';

export const Addtask = ({
  showAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask,
  setQucikAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
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
          setShowMain(false);
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
            onClick={() => setShowMain(!showMain)}
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
        <div className="add-task__main" data-testid="add-task-main">
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />

          <input
            type="text"
            className="add-task__content"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-task__submit" onClick={() => addtask()}>
            Add Task
          </button>

          {
            //cancle TAsk
            !showQuickAddTask && (
              <span
                className="add-task__cancle"
                onClick={() => {
                  setShowMain(false);
                  setshowProjectOverlay(false);
                }}
              >
                Cancle
              </span>
            )
          }
          <span
            className="add-task__project"
            onClick={() => {
              setshowProjectOverlay(!showProjectOverlay);
            }}
          >
            <FaRegListAlt />
          </span>
          <span
            className="add-task__date"
            onClick={() => {
              setShowTaskDate(!showTaskDate);
            }}
          >
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  );
};
