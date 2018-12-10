import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <Link className="goBack" to="/feed">
          Go Back
        </Link>
        <p>{post.text}</p>
        <div>
          <span>Author: {post.author}</span>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
