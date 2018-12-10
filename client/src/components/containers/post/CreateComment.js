import React, { Component } from "react";
import PropTypes from "prop-types";
import TextArea from "../../formComponents/fields/TextArea";

// Redux
import { connect } from "react-redux";
import { addComment } from "../../../redux/actions/postActions";

class CreateComment extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const comment = {
      text: this.state.text,
      name: user.name
    };

    this.props.addComment(postId, comment);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="commentForm">
        <form onSubmit={this.onSubmit}>
          <TextArea
            name="text"
            placeholder="Write your comment here.."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Post Comment" />
        </form>
      </div>
    );
  }
}

CreateComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CreateComment);
