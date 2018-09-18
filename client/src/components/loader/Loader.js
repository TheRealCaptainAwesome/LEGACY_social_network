import React, { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="load-bar">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    );
  }
}
