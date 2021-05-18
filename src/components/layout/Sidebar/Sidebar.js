import React, { useState } from 'react';
import { BsCalendar, BsInbox, BsPlus } from 'react-icons/bs';

import { FaChevronDown, FaRegCalendarCheck } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../../context';
import { Addproject } from '../../Addproject';

import { Projects } from '../../Projects';

export const Sidebar = (props) => {
  const [showProjects, setShowProjects] = useState(true);
  const [showAddProject, setShowAddProject] = useState(false);
  const [active, setactive] = useState('INBOX');
  const { setSelectedProject } = useSelectedProjectValue();

  // console.log('ACTIVE ⏩ :', active);
  return (
    <div className="Sidebar">
      <ul className="Sidebar__Generic">
        <li
          className={
            active === ('inbox' || 'INBOX')
              ? 'active Sidebar__Generic--lists'
              : 'Sidebar__Generic--lists'
          }
          onClick={() => {
            setactive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <BsInbox />
          </span>
          <span>Inbox</span>
        </li>

        <li
          className={
            active === 'Today'
              ? 'active Sidebar__Generic--lists'
              : 'Sidebar__Generic--lists'
          }
          onClick={() => {
            setactive('Today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <FaRegCalendarCheck />
          </span>
          <span>Today</span>
        </li>

        <li
          className={
            active === 'Next_7'
              ? 'active Sidebar__Generic--lists'
              : 'Sidebar__Generic--lists'
          }
          onClick={() => {
            setactive('Next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span>
            <BsCalendar />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div className="Sidebar__middle">
        <div className="project">
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
        <span
          className="plus--icon"
          onClick={() => setShowAddProject(!showAddProject)}
        >
          <BsPlus />
        </span>
      </div>
      <ul className="Sidebar__Projects">{showProjects && <Projects />}</ul>
      {showProjects && (
        <Addproject show={showAddProject} setShow={setShowAddProject} />
      )}
    </div>
  );
};
