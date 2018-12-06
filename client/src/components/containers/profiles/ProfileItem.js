import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card">
        <div className="cardPersonal">
          <p>{profile.user.name}</p>
          <p>{profile.title}</p>
          <p>{profile.location}</p>
        </div>
        <div className="cardSkills">
          <p>Skills</p>
          <ul>
            {profile.skills.slice(0, 4).map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <Link className="viewProfile" to={`/profile/${profile.handle}`}>
          View Profile
        </Link>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
