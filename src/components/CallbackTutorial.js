import { useCallback, useState } from 'react';
import Child from './Child';

/*
The child component displays a name after "hello there. However, that callback could be called multiple times. The hook useCallback memoizes the results of the callback, only executes when one of the inputs has changed.

This case: Only when data changes will the callback execute to add the name afterwards.

*/

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Hello there ');

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="container">
      <h1>useCallback</h1>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}> Toggle</button>
      {toggle && <p>toggle</p>}
    </div>
  );
}
