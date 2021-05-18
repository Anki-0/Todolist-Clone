import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

import {
  FaCalendarAlt,
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Addproject } from '../Addproject';

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
      <div className="sidebar__middle">
        <div>
          <span
            className="arrow__down"
            onClick={() => setShowProjects(!showProjects)}
          >
            <FaChevronDown
              className={!showProjects ? 'hidden-projects' : undefined}
            />
          </span>
          <h2 onClick={() => setShowProjects(!showProjects)}>Projects</h2>
        </div>
        <span className="plus--icon">
          <BsPlus />
        </span>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <Addproject />}
    </div>
  );
};
