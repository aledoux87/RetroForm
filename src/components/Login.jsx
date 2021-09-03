import React, { Component } from 'react';
import { string, func } from 'prop-types';
// import UserService from '../services/userService';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    const { login, password } = this.state;

    console.log('<Login />', {
      login,
      password
    });

    /* TODO: Déboguer le service
    UserService.loginUser({ login, password })
      .then(() => goToNextView())
      .catch(err => alert(err));
    */
  }

  render() {
    return (
      <form className="retro-form" onSubmit={this.submitForm}>
        <h2>{this.props.title}</h2>
        {this.props.subTitle && <p>{this.props.subTitle}</p>}

        <div className="retro-field">
          <label htmlFor="login">What is your login ?</label>
          <input
            className="retro-input"
            id="login"
            name="login"
            type="text"
            defaultValue={this.state.login}
            onChange={e => this.setState({ login: e.target.value })}
          />
        </div>

        <div className="retro-field">
          <label htmlFor="email">What is your email ?</label>
          <input
            className="retro-input"
            id="email"
            name="email"
            type="email"
            defaultValue={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        {/* TODO: Déboguer le composant, afin de mettre à jour son état */}

        <div className="retro-field">
          <label htmlFor="password">What is your password ?</label>
          <input
            className="retro-input"
            id="password"
            name="password"
            type="password"
            defaultValue={this.state.password}
            onChange={e => (this.state = { password: e.target.value })}
          />
        </div>

        <button
          className="retro-button"
          type="button"
          onClick={() => console.log("TODO: Changer le 'type' pour soumettre le formulaire")}>
          NEXT
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  title: string.isRequired,
  subTitle: string,
  goToNextView: func
};

export default Login;
