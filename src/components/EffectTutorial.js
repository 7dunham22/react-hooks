import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(
      (res) => {
        setData(res.data[0].email);
      },
      [count]
    );
  });

  return (
    <div className="container">
      <h1>useEffect Tutorial</h1>
      <div>{data}</div>
      <div className="counter">
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click to call the API
        </button>
      </div>
    </div>
  );
};

export default EffectTutorial;
