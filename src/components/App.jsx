import React, { useState } from 'react';
import Routing from './Routing';

function App() {
  const [userData, setUserData] = useState({
    login: '',
    email: '',
    passwordStrong: 0,
    firstName: '',
    lastName: '',
    birthYear: 0,
    gender: ''
  });

  return (
    <div>
      <h1>MY FØRM</h1>
      <Routing userData={userData} setUserData={values => setUserData({ ...userData, ...values })} />
    </div>
  );
}

export default App;
