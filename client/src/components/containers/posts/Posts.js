import React, { Component } from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Loader from "../../loader/Loader";

import "./Posts.css";

// Redux
import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.posts;
    let feedContent;

    if (posts === null || loading) {
      feedContent = <Loader />;
    } else {
      feedContent = <PostFeed posts={posts} />;
    }

    return (
      <div>
        <div>
          <PostForm />
          {feedContent}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
