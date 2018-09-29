import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Field from "../../formComponents/fields/Field";
import TextArea from "../../formComponents/fields/TextArea";
import SocialField from "../../formComponents/socialmedia/SocialField";
import AddValue from "../../formComponents/addvalue/AddValue";

class CreateProfile extends Component {
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
    console.log(e);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToList = () => {
    const newState = [...this.state.skills, this.state.addSkill];
    this.setState({ skills: newState });
  };

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
        </form>
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
