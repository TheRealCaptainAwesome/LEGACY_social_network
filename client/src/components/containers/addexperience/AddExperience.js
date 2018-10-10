import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Field from "../../formComponents/fields/Field";

// Redux
import { connect } from "react-redux";
import { addExperience } from "../../../redux/actions/profileActions";

class AddExperience extends Component {
  state = {
    title: "",
    company: "",
    from: "",
    to: "",
    current: false,
    disabled: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheckboxClick = () => {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      company: this.state.company,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current
    };

    this.props.addExperience(data, this.props.history);
  };

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmit}>
          <Field
            name="title"
            placeholder="Job Title"
            value={this.state.title}
            onChange={this.onChange}
            id="title"
          />
          <Field
            name="company"
            placeholder="Company Name"
            value={this.state.company}
            onChange={this.onChange}
            id="company"
          />
          <Field
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
            id="from"
          />
          <Field
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
            id="to"
            disabled={this.state.disabled ? "disabled" : ""}
          />
          <input
            type="checkbox"
            name="current"
            id="current"
            value={this.state.current}
            checked={this.state.current}
            onChange={this.onCheckboxClick}
          />
          <label htmlFor="current">Is this your current job?</label>
          <input type="submit" />
        </form>
      </main>
    );
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
