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
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <a href="" onClick={this.onLogout}>
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    );

    const notLoggedInLinks = (
      <nav>
        <ul>
          <li>
            <Link to="/">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
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
