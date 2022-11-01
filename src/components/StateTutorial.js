import React, { useState } from 'react';

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <h1>useState Tutorial</h1>
      <div className="counter">
        {counter}
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default StateTutorial;
