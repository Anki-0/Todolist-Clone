import React, { useState } from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { BiCalendarAlt } from 'react-icons/bi';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';

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
        <div className="add-task__main" data-testid="add-task-main">
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <div className="editting__area">
            <div className="input__field">
              <input
                type="text"
                className="add-task__content"
                placeholder="eg..Conference Wednesday at 15 #Metting"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="add__task__extrafield">
              <span
                className="add-task__schedule"
                onClick={() => {
                  setShowTaskDate(!showTaskDate);
                }}
              >
                <BiCalendarAlt /> Schedule
              </span>
              <span
                className="add-task__selectproject"
                onClick={() => {
                  setshowProjectOverlay(!showProjectOverlay);
                }}
              >
                <FaRegListAlt /> Select a Project
              </span>
            </div>
          </div>

          <div className="control__action">
            <button
              className="add-task__submit"
              onClick={() => {
                addtask();
                setshowAddTaskMain(!showAddTaskMain);
              }}
            >
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
                    setshowAddTaskMain(!showAddTaskMain);
                  }}
                >
                  Cancle
                </span>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
};
