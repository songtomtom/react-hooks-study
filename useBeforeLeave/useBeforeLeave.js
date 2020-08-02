import React, { useEffect } from 'react';
import './styles.css';

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return;
  }

  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  });
};
// export default function App() {
//   const begForLife = () => console.log("Please don't leave");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }
