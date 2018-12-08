import React, { Component } from "react";
import PropTypes from "prop-types";
import TextArea from "../../formComponents/fields/TextArea";

// Redux
import { connect } from "react-redux";
import { addPost } from "../../../redux/actions/postActions";

class PostForm extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const post = {
      text: this.state.text,
      author: user.name
    };

    this.props.addPost(post);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="createPost">
        <form onSubmit={this.onSubmit}>
          <TextArea
            name="text"
            placeholder="Write your post here.."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Create Post" />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
