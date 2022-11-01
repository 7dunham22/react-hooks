import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

/* Pass the context (state, functions) to child components without prop drilling.
 */
const ContextTutorial = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="container">
      <h1>useContext</h1>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

export default ContextTutorial;
