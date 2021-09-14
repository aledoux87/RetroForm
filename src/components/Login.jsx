import React, { useState } from 'react';
import { string, func } from 'prop-types';
import UserService from '../services/userService';


function Login(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) =>{
    event.preventDefault();
    UserService.loginUser({ login, password, email })
      .then(() => props.goToNextView())
      .catch(err => alert(err));
  }
  
  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <p>{props.subTitle}</p>}

      <div className="retro-field">
        <label htmlFor="login">What is your login ?</label>
        <input
          className="retro-input"
          id="login"
          name="login"
          type="text"
          defaultValue={login}
          onChange={e => setLogin(e.target.value)}
        />
      </div>

      <div className="retro-field">
        <label htmlFor="password">What is your password ?</label>
        <input
          className="retro-input"
          id="password"
          name="password"
          type="password"
          defaultValue={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="retro-field">
        <label htmlFor="email">What is your email ?</label>
        <input
          className="retro-input"
          id="email"
          name="email"
          type="email"
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button
        className="retro-button"
        type="submit">
        NEXT
      </button>
    </form>
  );
}


Login.propTypes = {
  title: string.isRequired,
  subTitle: string,
  goToNextView: func
};

export default Login;
