import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "../../loader/Loader";

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
        ? (profileItems = <h1>SHOULD LOAD HERE</h1>)
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
