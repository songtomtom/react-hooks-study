import React, { useState } from 'react';

// const contents = [
//   { tab: 'Section 1', content: "I'm the content of the Section 1" },
//   { tab: 'Section 2', content: "I'm the content of the Section 2" },
// ];

export const useTabs = (initialTabs, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTabs);

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

// export default function App() {
//   const { currentItem, changeItem } = useTabs(1, contents);
//   return (
//     <div className="App">
//       {contents.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// }
