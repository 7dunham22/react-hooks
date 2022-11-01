import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'toggleShowText':
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="container">
      <h1>useReducer Tutorial</h1>
      <div className="counter">
        {state.count}
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
            dispatch({ type: 'toggleShowText' });
          }}
        >
          Click Here
        </button>
      </div>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
