import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "../../loader/Loader";
import ProfileItem from "./ProfileItem";

// Redux
import { connect } from "react-redux";
import { getProfiles } from "../../../redux/actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Loader />;
    } else {
      profiles.length > 0
        ? (profileItems = profiles.map(profile => {
            return <ProfileItem key={profile._id} profile={profile} />;
          }))
        : (profileItems = <h1>No profiles found.</h1>);
    }

    return <div>{profileItems}</div>;
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
