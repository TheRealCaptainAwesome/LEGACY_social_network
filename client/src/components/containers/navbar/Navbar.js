import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="logoNtitle">
          <h1>Social Network</h1>
        </div>
        <ul>
          <li>Sign Up</li>
          <li>Sign In</li>
        </ul>
      </header>
    );
  }
}
