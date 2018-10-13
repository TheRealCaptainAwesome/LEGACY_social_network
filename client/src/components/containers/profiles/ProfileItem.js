import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card">
        <div>
          <h3>{profile.user.name}</h3>
          <p>{profile.title}</p>
          <p>{profile.location}</p>
        </div>
        <div>
          <h3>Skills</h3>
          <ul>
            {profile.skills.slice(0, 4).map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <Link to={`/profile/${profile.handle}`}>View Profile</Link>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
