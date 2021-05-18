import React, { useState } from 'react';
import { firebase } from '../firebase';
import { useProjectsValue } from '../context';
import { generatePushId } from '../helpers';

export const Addproject = ({ show, setShow }) => {
  const [projectName, setProjectName] = useState('');
  const { setProjects } = useProjectsValue();

  const projectid = generatePushId();

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({ projectid, name: projectName, userid: 'G3fWPE0hEeTtTiR88DWQ' })
        .then(() => {
          setProjects([]);
          setProjectName('');
          setShow(false);
        });
  };
  //console.log(show);
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShow(false);
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
    </div>
  );
};
