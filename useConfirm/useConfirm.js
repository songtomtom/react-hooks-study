import React from 'react';

export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }

  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

// export default function App() {
//   const deleteWorld = () => console.log("Deleting thie world");
//   const abort = () => console.log("Aborted");

//   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the world</button>
//     </div>
//   );
// }
