import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

class PostItem extends Component {
  render() {
    const { post, auth } = this.props;

    return (
      <div>
        <div>
          <p>{post.text}</p>
          <span>{post.author}</span>
        </div>
        <div>
          <span>Likes: {post.likes.length}</span>
        </div>
        {post.user === auth.user.id ? <button>Delete Post</button> : null}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
