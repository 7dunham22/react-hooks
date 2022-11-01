import React, { useRef } from 'react';
import Button from './Button';

/* The Button component toggles the text. We can pass the ref to the Button, which asigns it the alterToggle function with the useImperativeHandle hook. Then, we can access the toggle function from this parent button.

In short: We alter the child state.
*/
const ImperativeHandle = () => {
  const buttonRef = useRef(false);

  return (
    <div className="container">
      <h1>useImperativeHandle</h1>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
