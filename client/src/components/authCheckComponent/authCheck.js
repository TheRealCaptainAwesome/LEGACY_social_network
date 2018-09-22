import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthCheck = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

AuthCheck.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AuthCheck);
