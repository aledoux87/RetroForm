import React, { useState } from 'react';
import Routing from '../components/Routing';
// import User from '../data/user';

function App() {
  const [currentUser, setcurrentUser] = useState({
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    birthYear: '',
    gender: ''
  });

  return (
    <div>
      <h1>MY FØRM</h1>
      <Routing currentUser={currentUser} setcurrentUser={values => setcurrentUser({ ...currentUser, ...values })} />
    </div>
  );
}

export default App;
