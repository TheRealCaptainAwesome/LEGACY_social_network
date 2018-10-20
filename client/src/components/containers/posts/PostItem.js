import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { deletePost, postLikeToggle } from "../../../redux/actions/postActions";

class PostItem extends Component {
  onDeletePost = id => {
    this.props.deletePost(id);
  };

  onLike = id => {
    this.props.postLikeToggle(id);
  };

  addLikedClass = likes => {
    const { auth } = this.props;

    if (
      likes.filter(like => {
        return like.user === auth.user.id;
      }).length > 0
    ) {
      return "liked";
    } else {
      return null;
    }
  };

  render() {
    const { post, auth } = this.props;

    return (
      <div>
        <div>
          <p>{post.text}</p>
          <span>{post.author}</span>
        </div>
        <div>
          <span
            className={this.addLikedClass(post.likes)}
            onClick={this.onLike.bind(this, post._id)}
          >
            Likes: {post.likes.length}
          </span>
          <Link to={`/post/${post._id}`}>Comments</Link>
        </div>
        {post.user === auth.user.id ? (
          <button onClick={this.onDeletePost.bind(this, post._id)}>
            Delete Post
          </button>
        ) : null}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  postLikeToggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, postLikeToggle }
)(PostItem);
