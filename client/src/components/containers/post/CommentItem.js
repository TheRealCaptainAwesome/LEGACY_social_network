import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

// Redux
import { connect } from "react-redux";
import { deleteComment } from "../../../redux/actions/postActions";

class CommentItem extends Component {
  onDeleteComment = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="comment">
        <div className="commentText">
          <p>{comment.text}</p>
        </div>
        <div className="author">
          <p>
            {comment.name} -{" "}
            <Moment format="DD/MM/YYYY HH:mm">{comment.date}</Moment>
          </p>
        </div>
        {comment.user === auth.user.id ? (
          <div>
            <button
              onClick={this.onDeleteComment.bind(this, postId, comment._id)}
            >
              Delete Comment
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
