import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";
import ProfileExperience from "./ProfileExperience";
import Loader from "../../loader/Loader";
import { Link, withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { getProfileByHandle } from "../../../redux/actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileData;

    if (profile === null || loading) {
      profileData = <Loader />;
    } else {
      profileData = (
        <div>
          <div>
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
)(withRouter(Profile));