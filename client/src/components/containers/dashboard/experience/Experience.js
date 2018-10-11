import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";

class Experience extends Component {
  render() {
    const experience = this.props.experience.map(experience => {
      console.log(experience);
      return (
        <div key={experience._id}>
          <h2>{experience.title}</h2>
          <p>{experience.company}</p>
          <p>
            {experience.from} - {experience.current ? "Present" : experience.to}
          </p>
        </div>
      );
    });

    return <div>{experience}</div>;
  }
}

export default connect(null)(withRouter(Experience));
