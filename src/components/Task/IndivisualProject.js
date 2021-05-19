import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';

import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { firebase } from '../../firebase';
import { Backdrop } from '../layout';

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
      <div className="project__name-holder">
        <span className="Sidebar__Projects--dot" />

        <span className="Sidebar__Projects--name">{project.name}</span>
      </div>
      <span
        className="Sidebar__Projects-delete"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <BsTrash className="trashIcon" />
        <Backdrop show={showConfirm}>
          {showConfirm && (
            <form className="project__delete-modal">
              <section className="project__delete-modal__inner">
                <div className="alert__holder delete__confirm">
                  <div className="alert">
                    <FiAlertCircle />
                  </div>
                  <div className="textholder">
                    <p>
                      Are you sure you want to delete <b>{project.name}</b>?
                    </p>
                  </div>
                </div>
              </section>

              <footer className="controles">
                <span onClick={() => setShowConfirm(!showConfirm)}>Cancle</span>
                <button
                  type="button"
                  onClick={() => deleteProject(project.docId)}
                >
                  Delete
                </button>
              </footer>
            </form>
          )}
        </Backdrop>
      </span>
    </>
  );
};
