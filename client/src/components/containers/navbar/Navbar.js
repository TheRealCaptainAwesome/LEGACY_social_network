import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { logOut } from "../../../redux/actions/authActions";
import { clearProfile } from "../../../redux/actions/profileActions";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    toggle: false
  };

  onLogout = e => {
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    });
    this.props.clearProfile();
    this.props.logOut();
  };

  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const toggleMenu = (
      <svg
        fill="#000000"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={this.onToggle}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    );

    const loggedInLinks = (
      // TODO:
      // CSS needed
      // Toggle functionality needs to be removed on wider viewports¨
      // Toogle needs animation
      <nav className="loggedIn">
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link to="/feed">
            <li>Feed</li>
          </Link>
          <a href="" onClick={this.onLogout}>
            <li>Log Out </li>
          </a>
        </ul>
      </nav>
    );

    const notLoggedInLinks = (
      <nav>
        <ul>
          <Link to="/">
            <li>Sign In</li>
          </Link>

          <Link to="/register">
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    );

    return (
      <header>
        <div className="logoNtitle">
          <h1>Social Network</h1>
        </div>
        {isAuthenticated ? toggleMenu : notLoggedInLinks}
        {this.state.toggle ? loggedInLinks : null}
      </header>
    );
  }
}

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOut, clearProfile }
)(Navbar);
