import { firebase } from '../firebase';

export const CheckBox = ({ id }) => {
  const archivedTasks = firebase
    .firestore()
    .collection('tasks')
    .doc(id)
    .update({ archived: true });

  return (
    <div
      className="checkbox__holder"
      onClick={() => {
        archivedTasks();
      }}
    >
      <span className="checkbox" />
    </div>
  );
};
