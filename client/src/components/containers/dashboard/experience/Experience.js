import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";

// Redux
import { connect } from "react-redux";

class Experience extends Component {
  render() {
    const experience = this.props.experience.map(experience => {
      return (
        <div key={experience._id}>
          <h2>{experience.title}</h2>
          <p>{experience.company}</p>
          <p>
            <Moment format="DD/MM/YYYY">{experience.from}</Moment> -{" "}
            {experience.current ? (
              "Present"
            ) : (
              <Moment format="DD/MM/YYYY">{experience.to}</Moment>
            )}
          </p>
        </div>
      );
    });

    return <div>{experience}</div>;
  }
}

export default connect(null)(withRouter(Experience));
