import React, { Component } from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import Loader from "../../loader/Loader";

// Redux
import { connect } from "react-redux";

class Posts extends Component {
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

export default connect()(Posts);
