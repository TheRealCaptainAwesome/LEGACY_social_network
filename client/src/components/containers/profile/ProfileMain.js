import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../../redux/utilities/isEmpty";

class ProfileMain extends Component {
  render() {
    const { profile } = this.props;

    const skills = profile.skills.map((skill, index) => {
      return <li key={index}>{skill}</li>;
    });

    return (
      <div className="profileMain">
        <div className="bio">
          <h2>Bio</h2>
          <p>
            {isEmpty(profile.bio)
              ? `${profile.user.name} does not have a bio yet.`
              : profile.bio}
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>{skills}</ul>
        </div>
      </div>
    );
  }
}

ProfileMain.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileMain;
