import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';

export const Addtask = ({
  showAddTaskMenu = true,
  showShouldMain = false,
  showQuickAddTask,
  setQucikAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setPorject] = useState('');
  const [showMain, setShowMain] = useState(showShouldMain);
  const [projectOverlay, setProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue;

  return <p>set task</p>;
};
