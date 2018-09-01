import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// For Redux
import { connect } from "react-redux";
import { loginUser } from "../../../../redux/actions/authActions";

class Login extends Component {
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
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
