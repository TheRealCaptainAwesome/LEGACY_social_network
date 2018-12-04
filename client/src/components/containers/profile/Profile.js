import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";
import ProfileExperience from "./ProfileExperience";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";

import "./Profile.css";

// Redux
import { connect } from "react-redux";
import { getProfileByHandle } from "../../../redux/actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/notfound");
    }
    return true;
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileData;

    if (profile === null || loading) {
      profileData = <Loader />;
    } else {
      profileData = (
        <div className="profile">
          <div className="goBack">
            <Link to="/profiles">Back to Profiles</Link>
          </div>
          <div>
            <ProfileHeader profile={profile} />
            <ProfileMain profile={profile} />
            <ProfileExperience profile={profile} />
          </div>
        </div>
      );
    }

    return <div>{profileData}</div>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
