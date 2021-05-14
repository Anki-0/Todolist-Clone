import React, { useState } from 'react';
import { FaTrashAlt, FaDotCircle } from 'react-icons/fa';

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
      <span className="sidebar__dot">
        <FaDotCircle />
      </span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
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
