import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { LOGIN_VIEW, REGISTER_VIEW } from '../constants';

function App() {
  const [view, setView] = useState(LOGIN_VIEW);

  return (
    <div>
      <h1>MY FØRM</h1>

      {view === LOGIN_VIEW && (
        <Login title="Login" subTitle="Type your credentials below..." goToNextView={() => setView(REGISTER_VIEW)} />
      )}

      {view === REGISTER_VIEW && (
        <Register
          title="Register"
          subTitle="Let's talk about you..."
          goToNextView={() => console.log('TODO: Implémenter la vue récapitulative de données')}
        />
      )}
    </div>
  );
}

export default App;
