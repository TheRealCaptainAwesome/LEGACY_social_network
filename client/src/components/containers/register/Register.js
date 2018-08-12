import React, { Component } from "react";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onInputChange = evt => {
    const state = Object.assign({}, this.state);
    state[evt.target.name] = evt.target.value;
    this.setState(state);
  };

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
          />
          <input type="submit" />
        </form>
      </main>
    );
  }
}
