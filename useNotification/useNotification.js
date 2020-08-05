import React, { useEffect, useState } from 'react';

export const useNotification = (titie, options) => {
  if (!('Notification' in window)) {
    return;
  }

  const fireNotIf = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(titie, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(titie, options);
    }
  };

  return fireNotIf;
};

// export default function App() {
//   const triggerNotify = useNotification("Notification Test");
//   return (
//     <div className="App">
//       <button onClick={triggerNotify}>Hello</button>
//     </div>
//   );
// }
