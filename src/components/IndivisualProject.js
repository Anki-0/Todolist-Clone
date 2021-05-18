import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';

import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';
import { Backdrop } from './layout';

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
      <div>
        <span className="Sidebar__Projects--dot" />

        <span className="Sidebar__Projects--name">{project.name}</span>
      </div>
      <span
        className="Sidebar__projects-delete"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <BsTrash />
        <Backdrop show={showConfirm}>
          {showConfirm && (
            <div className="project__delete-modal">
              <div className="alert">
                <FiAlertCircle />
              </div>
              <div className="project__delete-modal__inner">
                <p>Are you sure you want to delete {project.name}</p>
                <div className="controles">
                  <span onClick={() => setShowConfirm(!showConfirm)}>
                    Cancle
                  </span>
                  <button
                    type="button"
                    onClick={() => deleteProject(project.docId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </Backdrop>
      </span>
    </>
  );
};
