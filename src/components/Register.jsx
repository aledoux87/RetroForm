import React, { useState } from 'react';
import { string, func } from 'prop-types';
import Field from './Field';
import UserService from '../services/userService';

function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [yearOld, setYearOld] = useState(0);
  const [gender, setGender] = useState('unknown');

  const submitForm = event => {
    event.preventDefault();

    console.log('<Register />', {
      firstName,
      lastName,
      yearOld,
      gender
    });

    UserService.registerUser({ firstName, lastName, yearOld, gender })
      .then(() => props.goToNextView())
      .catch(err => alert(err));
  };

  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <p>{props.subTitle}</p>}

      <Field
        label="What is your first name ?"
        id="firstName"
        placeholder="John"
        defaultValue={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <Field
        label="What is your last name ?"
        id="lastName"
        placeholder="Doe"
        defaultValue={lastName}
        onChange={e => setLastName(e.target.value)}
      />

      <Field
        label="How old are you ?"
        id="yearOld"
        type="number"
        placeholder="42"
        onChange={e => setYearOld(e.target.value)}
      />

      <div className="retro-field">
        <label htmlFor="gender">What kind of human are you ?</label>
        <select
          className="retro-select"
          id="gender"
          name="gender"
          defaultValue={gender}
          onChange={e => setGender(e.target.value)}>
          <option value="unknown" disabled>
            Unknown
          </option>
          <option value="gentleman">Gentleman</option>
          <option value="lady">Lady</option>
        </select>
      </div>

      <button className="retro-button" type="submit">
        SEND
      </button>
    </form>
  );
}

Register.propTypes = {
  title: string.isRequired,
  subTitle: string,
  goToNextView: func
};

export default Register;
