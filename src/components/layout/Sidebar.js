import React, { useState } from 'react';

import {
  FaCalendarAlt,
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
} from 'react-icons/fa';

import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';

export const Sidebar = (props) => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar">
      <ul className="sidebat__generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <p>Add MORE projects</p>}
    </div>
  );
};
