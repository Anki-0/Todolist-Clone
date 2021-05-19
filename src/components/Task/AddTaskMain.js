import React from 'react';
import { BiCalendarAlt } from 'react-icons/bi';
import { FaRegListAlt } from 'react-icons/fa';
import { TaskDate } from './TaskDate';

export const AddTaskMain = ({
  task,
  setTask,
  addtask,
  showMain,
  setShowMain,
  setTaskDate,
  showTaskDate,
  setShowTaskDate,
  setshowProjectOverlay,
  showProjectOverlay,
  setshowAddTaskMain,
  showAddTaskMain,
}) => {
  return (
    <>
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
            }}
          >
            Add Task
          </button>

          {
            //cancle TAsk
            <span
              className="add-task__cancle"
              onClick={() => {
                setShowMain(false);
                setshowProjectOverlay(false);
                setshowAddTaskMain(!showAddTaskMain);
                setShowMain(!showMain);
              }}
            >
              Cancle
            </span>
          }
        </div>
      </div>
    </>
  );
};
