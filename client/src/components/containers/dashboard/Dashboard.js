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
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <span>Loading..</span>;
    } else {
      dashboardContent = <span>Profile showing here</span>;
    }

    return <div>{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Dashboard);
