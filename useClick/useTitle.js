import React, { useState, useEffect } from 'react';

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTlte = document.querySelector('title');
    htmlTlte.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

// export default function App() {
//   const titleUpdater = useTitle('Loading...');
//   setTimeout(() => {
//     titleUpdater('Home');
//   }, 5000);
//   return (
//     <div className="App">
//       <div>Hi</div>
//     </div>
//   );
// }
