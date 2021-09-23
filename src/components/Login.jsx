import React, { useState } from 'react';
import { string } from 'prop-types';
import UserService from '../services/userService';
import Field from './Field';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, getUser } from '../redux/user';

function useField(defaultState) {
  const [val, setVal] = useState(defaultState);
  return [val, e => setVal(e.target.value)];
}

function Login(props) {
  //Hook = useState
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state)); // useSelector(getUser);
  const [login, setLogin] = useField(user.login);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email);

  const submitForm = event => {
    dispatch({ type: 'Counter - Set Counter', payload: 1 });

    event.preventDefault();
    UserService.loginUser({ login, password, email })
      .then(result => {
        dispatch(setUser(result));
        history.push('/register');
      })
      .catch(err => alert(err));
  };

  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

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
  subTitle: string
};

export default Login;
