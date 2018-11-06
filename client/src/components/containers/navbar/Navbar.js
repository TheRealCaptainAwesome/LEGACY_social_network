import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { logOut } from "../../../redux/actions/authActions";
import { clearProfile } from "../../../redux/actions/profileActions";

import "./Navbar.css";

class Navbar extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.clearProfile();
    this.props.logOut();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const loggedInLinks = (
      // TODO:
      // LoggedInLinks needs toggle button on small viewports
      // Displayed toggle should be static and above everything else
      <nav>
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
        {isAuthenticated ? loggedInLinks : notLoggedInLinks}
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
