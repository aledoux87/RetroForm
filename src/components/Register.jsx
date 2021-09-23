import React, { useState } from 'react';
import { string } from 'prop-types';
import Field from './Field';
import UserService from '../services/userService';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user';
import { getUser } from '../redux/user/selectors';

// class Reg extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: '',
//       lastName: ''
//     };
//   }

//   componentDidMount() {
//     this.setState({ lastName: 'plop' });
//   }

//   componentDidUpdate(currentState, prevState) {
//     if (currentState !== prevState) {
//       // TODO: ...
//     }
//   }

//   render() {
//     return <div></div>;
//   }
// }

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state));
  const counter = useSelector(state => state.counter || 0);
  const [lastName, setLastName] = useState(user.lastName);
  const [yearOld, setYearOld] = useState(user.yearOld);
  const [gender, setGender] = useState(user.gender);

  const submitForm = event => {
    dispatch({ type: 'Counter - Set Counter', payload: counter + 1 });

    event.preventDefault();
    UserService.registerUser({ firstName: user.firstName, lastName, yearOld, gender })
      .then(result => {
        dispatch(setUser(result));
        history.push('/recap');
      })
      .catch(err => alert(err));
  };

  return (
    <form className="retro-form" onSubmit={submitForm}>
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

      <Field
        label="What is your first name ?"
        id="firstName"
        placeholder="John"
        defaultValue={user.firstName}
        onChange={e => dispatch({ type: 'USER/SET_USER', payload: { firstName: e.target.value } })}
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
  subTitle: string
};

export default Register;
