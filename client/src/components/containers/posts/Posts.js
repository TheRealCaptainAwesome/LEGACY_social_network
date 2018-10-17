import React, { Component } from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import Loader from "../../loader/Loader";

// Redux
import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <div>
          <PostForm />
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
