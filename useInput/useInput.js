import React, { useState } from 'react';

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// export default function App() {
//   const maxLen = value => value.length < 10;
//   const name = useInput("Mr. ", maxLen);

//   return (
//     <div className="App">
//       <h1>Hello useInput</h1>
//       <input placeholder="Neme" {...name} />
//     </div>
//   );
// }
