import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getProfile } from "../../../redux/actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { getProfile }
)(Dashboard);
