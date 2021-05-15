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
  const [active, setactive] = useState('INBOX');
  const { setSelectedProject } = useSelectedProjectValue();

  // console.log('ACTIVE ⏩ :', active);
  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === ('inbox' || 'INBOX') ? 'active' : undefined}
          onClick={() => {
            setactive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>

        <li
          className={active === 'Today' ? 'active' : undefined}
          onClick={() => {
            setactive('Today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>

        <li
          className={active === 'Next_7' ? 'active' : undefined}
          onClick={() => {
            setactive('Next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span>
            <FaCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <p>Add MORE projects</p>}
    </div>
  );
};
