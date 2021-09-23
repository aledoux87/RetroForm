import React, { useEffect } from 'react';
import Routing from '../components/Routing';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const resetCounter = () => ({ type: 'Counter - Reset Counter' }); // Action

  useEffect(() => {
    dispatch(resetCounter());

    // eslint-disable-next-line
    console.log('App Is Running');
  }, []);

  return (
    <div className="center-app">
      <h1>MY FØRM</h1>
      <Routing />
    </div>
  );
}

export default App;
