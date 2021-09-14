import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Recap from './Recap';
import User from '../data/user';
import { LOGIN_VIEW, REGISTER_VIEW, RECAP_VIEW } from '../constants';

function App(props) {
  const [view, setView] = useState(LOGIN_VIEW);
  const [currentUser, setcurrentUser] = useState(new User('', '', '', '', 0, ''));

  return (
    <div>
      <h1>MY FØRM</h1>

      {view === LOGIN_VIEW && (
        <Login 
        title="Login" 
        subTitle="Type your credentials below..." 
        setcurrentUser={values => setcurrentUser({ ...currentUser, ...values })}
        goToNextView={() => setView(REGISTER_VIEW)} />
      )}

      {view === REGISTER_VIEW && (
        <Register
          title="Register"
          subTitle="Let's talk about you..."
          setcurrentUser={values => setcurrentUser({ ...currentUser, ...values })}
          goToNextView={() => setView(RECAP_VIEW)}
        />
      )}

      {view === RECAP_VIEW && (
        <Recap
          title="Recapitulatif"
          subTitle="You are :"
          userData={currentUser}
        />
      )}
    </div>
  );
}

export default App;
