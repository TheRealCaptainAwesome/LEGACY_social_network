import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuth from "../utilities/setAuth";
import jwt_decode from "jwt-decode";

export const registerUser = (data, routerHistory) => dispatch => {
  axios
    .post("/api/auth/register", data)
    .then(res => routerHistory.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = user => dispatch => {
  axios
    .post("api/auth/login", user)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem("authToken", token);
      setAuth(token);

      const setUser = jwt_decode(token);
      dispatch(setCurrentUser(setUser));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = setUser => {
  return {
    type: SET_CURRENT_USER,
    payload: setUser
  };
};
