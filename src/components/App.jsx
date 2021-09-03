import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Listing from './Listing';
import { LOGIN_VIEW, REGISTER_VIEW, LISTING_VIEW } from '../constants';

function App() {
  const [view, setView] = useState(LOGIN_VIEW);
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

      {view === LOGIN_VIEW && (
        <Login
          title="Login"
          subTitle="Type your credentials below..."
          setUserData={values => setUserData({ ...userData, ...values })}
          goToNextView={() => setView(REGISTER_VIEW)}
        />
      )}

      {view === REGISTER_VIEW && (
        <Register
          title="Register"
          subTitle="Let's talk about you..."
          setUserData={values => setUserData({ ...userData, ...values })}
          goToNextView={() => setView(LISTING_VIEW)}
        />
      )}

      {view === LISTING_VIEW && <Listing userData={userData} goToNextView={() => setView(LOGIN_VIEW)} />}
    </div>
  );
}

export default App;
