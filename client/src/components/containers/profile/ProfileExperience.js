import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../../redux/utilities/isEmpty";
import Moment from "react-moment";

class ProfileExperience extends Component {
  render() {
    const { profile } = this.props;
    let experiences;

    if (!isEmpty(profile.experience)) {
      experiences = profile.experience.map(experience => {
        return (
          <div key={experience._id}>
            <h3>{experience.company}</h3>
            <p>{experience.title}</p>
            <p>
              <span>
                <Moment format="DD/MM/YYYY">{experience.from}</Moment>
              </span>
              -{" "}
              <span>
                {experience.current ? (
                  "Present"
                ) : (
                  <Moment format="DD/MM/YYYY">{experience.to}</Moment>
                )}
              </span>
            </p>
          </div>
        );
      });
    }

    return (
      <div>
        {experiences.length > 0 ? (
          <div>{experiences}</div>
        ) : (
          <h3>No experience listed.</h3>
        )}
      </div>
    );
  }
}

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExperience;
