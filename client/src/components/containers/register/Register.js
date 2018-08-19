import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";

class Register extends Component {
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

  onSubmit = evt => {
    evt.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(user);
  };

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmit}>
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
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
