import React, { Component } from "react";

export default class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = evt => {
    let state = Object.assign({}, this.state);
    state[evt.target.name] = evt.target.value;
    this.setState(state);
  };

  onSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
