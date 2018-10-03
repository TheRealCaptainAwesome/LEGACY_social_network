import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  getProfile,
  deleteAccount
} from "../../../redux/actions/profileActions";
import DashboardNavbar from "./dashboardNavbar/DashboardNavbar";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  onDeleteAccount = () => {
    if (window.confirm("Are you sure?")) {
      this.props.deleteAccount();
    }
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Loader />;
    } else if (profile.noprofile) {
      dashboardContent = (
        <div>
          <span>{user.name} has no profile</span>
          <Link to="/createprofile">Create a Profile</Link>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p>
            Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
          </p>
          <DashboardNavbar />
          <button onClick={this.onDeleteAccount}>Delete Account</button>
        </div>
      );
    }

    return <div>{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile, deleteAccount }
)(Dashboard);
