import React, { Component } from 'react';
import Register from './register-login/Register';
import Login from './register-login/Login';

export default class RegisterLoginForm extends Component {
  state = {
    formActive: 'login',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ formActive: value });
  };

  render() {
    const { formActive } = this.state;
    return (
      <div>
        <label>
          Sign in
          <input
            type="radio"
            checked={formActive === 'login'}
            value="login"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Sign up
          <input
            type="radio"
            checked={formActive === 'register'}
            value="register"
            onChange={this.handleChange}
          />
        </label>
        {formActive === 'register' && <Register />}
        {formActive === 'login' && <Login />}
      </div>
    );
  }
}
