import moment from 'moment';
import React from 'react';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date">
        <ul className="task-date__list">
          <li
            onClick={() => {
              setTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
            }}
          >
            TODAY
          </li>
          <li
            onClick={() => {
              setTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
          >
            Tomorrow
          </li>
          <li
            onClick={() => {
              setTaskDate(false);
              setTaskDate(moment().add(7, 'day').format('DD/MM/YYYY'));
            }}
          >
            Next Week
          </li>
        </ul>
      </div>
    )
  );
};
