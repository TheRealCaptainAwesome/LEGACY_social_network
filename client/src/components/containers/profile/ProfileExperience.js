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
          <div className="experience" key={experience._id}>
            <p>
              Company: <span>{experience.company}</span>
            </p>
            <p>
              Title: <span>{experience.title}</span>
            </p>
            <p>
              Timespan:
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
      <div className="profileExperience">
        <h2>Experience</h2>
        {experiences.length > 0 ? (
          <div>{experiences}</div>
        ) : (
          <p>No experience listed.</p>
        )}
      </div>
    );
  }
}

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExperience;
