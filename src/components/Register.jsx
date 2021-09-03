import React, { Component } from 'react';
import { string, func } from 'prop-types';
import Field from './Field';
import UserService from '../services/userService';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      yearOld: 0,
      gender: 'unknown'
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    const { firstName, lastName, yearOld, gender } = this.state;

    console.log('<Register />', {
      firstName,
      lastName,
      yearOld,
      gender
    });

    UserService.registerUser({ firstName, lastName, yearOld, gender })
      .then(() => this.props.goToNextView())
      .catch(err => alert(err));
  }

  render() {
    return (
      <form className="retro-form" onSubmit={this.submitForm}>
        <h2>{this.props.title}</h2>
        {this.props.subTitle && <p>{this.props.subTitle}</p>}

        <Field
          label="What is your first name ?"
          id="firstName"
          placeholder="John"
          defaultValue={this.state.firstName}
          onChange={e => this.setState({ firstName: e.target.value })}
        />

        <Field
          label="What is your last name ?"
          id="lastName"
          placeholder="Doe"
          defaultValue={this.state.lastName}
          onChange={e => this.setState({ lastName: e.target.value })}
        />

        <Field
          label="How old are you ?"
          id="yearOld"
          type="number"
          placeholder="42"
          onChange={e => this.setState({ yearOld: e.target.value })}
        />

        <div className="retro-field">
          <label htmlFor="gender">What kind of human are you ?</label>
          <select
            className="retro-select"
            id="gender"
            name="gender"
            defaultValue={this.state.gender}
            onChange={e => this.setState({ gender: e.target.value })}>
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
}

Register.propTypes = {
  title: string.isRequired,
  subTitle: string,
  goToNextView: func
};

export default Register;
