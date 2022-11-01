import { useLayoutEffect, useEffect, useRef, useState } from 'react';

const LayoutEffectTutorial = () => {
  const [text, setText] = useState('DAVID');
  const divRef = useRef(null);

  // Invoked before useEffect.
  // Case: Change the layout before it prints out to the user.
  useLayoutEffect(() => {
    console.log(divRef.current.value);
  }, []);

  // Invoked after the initial render.
  useEffect(() => {
    divRef.current.value = 'HELLO';
  }, []);

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>useLayoutEffect Tutorial</h1>
      <input ref={divRef} value={text} onChange={changeText} />
    </div>
  );
};

export default LayoutEffectTutorial;
