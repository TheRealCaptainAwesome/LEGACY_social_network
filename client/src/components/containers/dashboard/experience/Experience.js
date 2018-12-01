import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

import "./Experience.css";

// Redux
import { connect } from "react-redux";
import { deleteExperience } from "../../../../redux/actions/profileActions";

class Experience extends Component {
  onDelete = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(experience => {
      return (
        <div key={experience._id} className="experienceItem">
          <h2>{experience.title}</h2>
          <p>Company: {experience.company}</p>
          <p>
            <Moment format="DD/MM/YYYY">{experience.from}</Moment> -{" "}
            {experience.current ? (
              "Present"
            ) : (
              <Moment format="DD/MM/YYYY">{experience.to}</Moment>
            )}
          </p>
          <button onClick={this.onDelete.bind(this, experience._id)}>
            Delete Experience
          </button>
        </div>
      );
    });

    return <div className="experienceContainer">{experience}</div>;
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
