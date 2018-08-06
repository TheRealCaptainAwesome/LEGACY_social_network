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
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
      </header>
    );
  }
}
