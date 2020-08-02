import React from 'react';
// import './styles.css';

export const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const diaablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, diaablePrevent };
};

// export default function App() {
//   const { enablePrevent, diaablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={diaablePrevent}>Unprotect</button>
//     </div>
//   );
// }
