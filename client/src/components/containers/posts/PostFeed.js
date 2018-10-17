import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    const feed = posts.map((post, index) => {
      return <PostItem key={index} post={post} />;
    });

    return <div>{feed}</div>;
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
