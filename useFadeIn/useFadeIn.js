import React, { useEffect, useRef } from 'react';
// import "./styles.css";

export const useFadeIn = (duration = 3, delay = 0) => {
  if (typeof duration !== 'number' && typeof delay !== 'number') {
    return;
  }

  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });

  return { ref: element, style: { opacity: 0 } };
};

// export default function App() {
//   const FadeInH1 = useFadeIn(1, 2);
//   const FadeInP = useFadeIn(5, 10);
//   return (
//     <div className="App">
//       <h1 {...FadeInH1}>Hello</h1>
//       <p {...FadeInP}>Fade in effect</p>
//     </div>
//   );
// }
