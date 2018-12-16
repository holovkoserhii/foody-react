import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
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
    const { name, email, phone, pass } = this.state;
    console.log(
      `Registering: name = ${name}, email = ${email}, phone = ${phone}, pass = ${pass}`,
    );
    this.reset();
  };

  render() {
    const { name, email, phone, pass } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="pass"
          value={pass}
          onChange={this.handleChange}
        />
        <button>Sign up</button>
      </form>
    );
  }
}
