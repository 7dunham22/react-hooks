import React, { useRef, useState } from 'react';

const RefTutorial = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('David');

  const onClick = () => {
    inputRef.current.focus(); // Focuses on the input element reference.
    setName(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className="container">
      <h1>useRef Tutorial</h1>
      <div>{name}</div>
      <div className="textInput">
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </div>
  );
};

export default RefTutorial;
