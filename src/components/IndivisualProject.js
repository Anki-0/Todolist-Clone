import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndivisualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects, setProjects } = useProjectsValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="sidebar__projects--names">
        <span className="sidebar__dot" />

        <span className="sidebar__projects-name">{project.name}</span>
      </div>
      <span
        className="sidebar__projects-delete"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <BsTrash />
        {showConfirm && (
          <div className="project__delete-modal">
            <div className="project__delete-modal__inner">
              <p>Are you sure you want to delete this project</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancle</span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
