import React, { useEffect, useState } from 'react';
import defaultAxios from 'axios';

export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!options.url) {
    return;
  }

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  return { ...state, refetch };
};

// export default function App() {
//   const { loading, data, error, refetch } = useAxios({
//     url: 'https://yts.am/api/v2/list_movies.json',
//   });

//   return (
//     <div className="App">
//       <h2>{loading && 'Loading'}</h2>
//       <button onClick={refetch}>Hello</button>
//     </div>
//   );
// }
