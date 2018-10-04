import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Field from "../../formComponents/fields/Field";
import TextArea from "../../formComponents/fields/TextArea";
import SocialField from "../../formComponents/socialmedia/SocialField";
import AddValue from "../../formComponents/addvalue/AddValue";

// Redux
import {
  createProfile,
  getProfile
} from "../../../redux/actions/profileActions";

//Icons for socialmediafield
import facebook from "../../formComponents/socialmedia/facebook.png";
import instagram from "../../formComponents/socialmedia/instagram.png";
import twitter from "../../formComponents/socialmedia/twitter.png";

class EditProfile extends Component {
  state = {
    handle: "",
    title: "",
    location: "",
    addSkill: "",
    skills: [],
    bio: "",
    facebook: "",
    twitter: "",
    instagram: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      handle: this.state.handle,
      title: this.state.title,
      location: this.state.location,
      skills: this.state.skills,
      bio: this.state.bio,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram
    };

    this.props.createProfile(data, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToList = () => {
    const newState = [...this.state.skills, this.state.addSkill];
    this.setState({ skills: newState });
  };

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return (
      <main>
        <h1>Create Your Profile</h1>
        <form onSubmit={this.onSubmit}>
          <Field
            name="handle"
            placeholder="Username"
            value={this.state.handle}
            onChange={this.onChange}
            id="username"
          />
          <Field
            name="title"
            placeholder="Your title"
            value={this.state.title}
            onChange={this.onChange}
            id="title"
          />
          <Field
            name="location"
            placeholder="Where in the world are you?"
            value={this.state.location}
            onChange={this.onChange}
            id="location"
          />
          <AddValue
            name="addSkill"
            placeholder="Example: Excel"
            value={this.state.addSkill}
            onChange={this.onChange}
            id="skill"
            addToList={this.addToList}
            itemArray={this.state.skills}
          />
          <TextArea
            name="bio"
            placeholder="Tell us about yourself"
            value={this.state.bio}
            onChange={this.onChange}
          />
          <SocialField
            name="facebook"
            placeholder="Your Facebook username"
            value={this.state.facebook}
            onChange={this.onChange}
            icon={facebook}
          />
          <SocialField
            name="twitter"
            placeholder="Your Twitter username"
            value={this.state.twitter}
            onChange={this.onChange}
            icon={twitter}
          />
          <SocialField
            name="instagram"
            placeholder="Your Instagram username"
            value={this.state.instagram}
            onChange={this.onChange}
            icon={instagram}
          />
          <input type="submit" />
        </form>
      </main>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getProfile }
)(withRouter(EditProfile));
