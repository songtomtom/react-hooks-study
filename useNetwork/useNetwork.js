import React, { useEffect, useState } from 'react';
// import "./styles.css";

export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return status;
};

// export default function App() {
//   const onLine = useNetwork();
//   return (
//     <div className="App">
//       <h1>{onLine ? "Online" : "Offline"}</h1>
//     </div>
//   );
// }
