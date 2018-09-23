import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CreateProfile extends Component {
  state = {
    handle: "",
    title: "",
    location: "",
    skills: [],
    bio: "",
    facebook: "",
    twitter: "",
    instagram: "",
    errors: {}
  };

  render() {
    return (
      <main>
        <h1>Create Your Profile</h1>
      </main>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
