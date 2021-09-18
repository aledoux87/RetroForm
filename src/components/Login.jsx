import React, { useState } from 'react';
import { string, func } from 'prop-types';
import UserService from '../services/userService';
import Field from './Field';
import { useHistory } from 'react-router';

function useField(defaultState) {
  const [val, setVal] = useState(defaultState);
  return [val, e => setVal(e.target.value)];
}

function Login(props) {
  //Hook = useState
  const [login, setLogin] = useField('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const submitForm = event => {
    event.preventDefault();
    UserService.loginUser({ login, password, email })
      .then(result => {
        props.setcurrentUser(result);
        history.push('/register');
      })
      .catch(err => alert(err));
  };

  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <p>{props.subTitle}</p>}

      <Field label="What is your login ?" id="login" type="text" defaultValue={login} onChange={setLogin} />

      <Field
        label="What is your password ?"
        id="password"
        type="password"
        defaultValue={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Field
        label="What is your email ?"
        id="email"
        type="email"
        defaultValue={email}
        onChange={e => setEmail(e.target.value)}
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
  setcurrentUser: func
};

export default Login;
