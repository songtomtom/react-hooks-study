import React, { useState, useEffect } from 'react';

export default function App() {
  const sayHello = () => console.log('Hello');

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  useEffect(sayHello, [number1]);

  return (
    <div className="App">
      <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
}
