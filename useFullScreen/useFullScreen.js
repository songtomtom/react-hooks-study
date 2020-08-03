import React, { useRef } from 'react';

export const useFullScreen = () => {
  const element = useRef();

  const triggerFullScreen = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      element.current.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      element.current.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      element.current.msExitFullscreen();
    }
  };

  return { element, triggerFullScreen, exitFullScreen };
};

// export default function App() {
//   const { element, triggerFullScreen, exitFullScreen } = useFullScreen();
//   return (
//     <div className="App" style={{ height: '1000vh' }}>
//       <div ref={element}>
//         <img src="https://www.gstatic.com/webp/gallery/1.jpg" />
//         <button onClick={exitFullScreen}>Exit Screen</button>
//       </div>
//       <button onClick={triggerFullScreen}>Full Screen</button>
//     </div>
//   );
// }
