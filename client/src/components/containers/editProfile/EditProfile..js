import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import isEmpty from "../../../redux/utilities/isEmpty";

import "./EditProfile.css";

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

  loadEditFields = profile => {
    profile.handle = !isEmpty(profile.handle) ? profile.handle : "";
    profile.title = !isEmpty(profile.title) ? profile.title : "";
    profile.location = !isEmpty(profile.location) ? profile.location : "";
    profile.skills = !isEmpty(profile.skills) ? profile.skills : [];
    profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
    profile.social_media = !isEmpty(profile.social_media)
      ? profile.social_media
      : {};
    profile.social_media.facebook = !isEmpty(profile.facebook)
      ? profile.facebook
      : "";
    profile.social_media.twitter = !isEmpty(profile.twitter)
      ? profile.twitter
      : "";
    profile.social_media.instagram = !isEmpty(profile.instagram)
      ? profile.instagram
      : "";

    this.setState({
      handle: profile.handle,
      title: profile.title,
      location: profile.location,
      skills: profile.skills,
      bio: profile.bio,
      facebook: profile.facebook,
      twitter: profile.twitter,
      instagram: profile.instagram
    });
  };

  componentDidMount() {
    this.props.getProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    const profile = this.props.profile.profile;
    if (prevProps.profile.profile !== profile) {
      this.loadEditFields(profile);
    }
  }

  render() {
    return (
      <div className="editProfile">
        <h2>Edit Your Profile</h2>
        <form onSubmit={this.onSubmit}>
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
            placeholder="Facebook Username"
            value={this.state.facebook}
            onChange={this.onChange}
            icon={facebook}
          />
          <SocialField
            name="twitter"
            placeholder="Twitter Username"
            value={this.state.twitter}
            onChange={this.onChange}
            icon={twitter}
          />
          <SocialField
            name="instagram"
            placeholder="Instagram Username"
            value={this.state.instagram}
            onChange={this.onChange}
            icon={instagram}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
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
