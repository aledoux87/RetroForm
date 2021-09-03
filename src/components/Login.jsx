import React, { useState } from 'react';
import { string, func } from 'prop-types';
import { useHistory } from 'react-router';
import Field from './Field';
import UserService from '../services/userService';

function Login(props) {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = event => {
    event.preventDefault();

    console.log('<Login />', {
      login,
      email,
      password
    });

    UserService.loginUser({ login, email, password })
      .then(result => {
        props.setUserData(result);
        history.push('/register');
      })
      .catch(err => alert(err));
  };

  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <p>{props.subTitle}</p>}

      <Field label="What is your login ?" id="login" defaultValue={login} onChange={e => setLogin(e.target.value)} />

      <Field
        label="What is your email ?"
        id="email"
        type="email"
        defaultValue={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Field
        label="What is your password ?"
        id="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="retro-button" type="submit">
        NEXT
      </button>
    </form>
  );
}

Login.propTypes = {
  title: string.isRequired,
  subTitle: string,
  setUserData: func
};

export default Login;
