import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  pass: '',
};

export default class Register extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, pass } = this.state;
    console.log(`Log in: email = ${email}, pass = ${pass}`);
    this.reset();
  };

  render() {
    const { email, pass } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="pass"
          value={pass}
          onChange={this.handleChange}
        />
        <button>Sign in</button>
      </form>
    );
  }
}
