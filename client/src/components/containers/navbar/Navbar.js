import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="logoNtitle">
          <h1>Social Network</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
