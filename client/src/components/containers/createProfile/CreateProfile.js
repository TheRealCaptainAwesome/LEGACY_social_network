import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Field from "../../formComponents/fields/Field";
import TextArea from "../../formComponents/fields/TextArea";
import Select from "../../formComponents/dropdown/Select";
import SocialField from "../../formComponents/socialmedia/SocialField";

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
