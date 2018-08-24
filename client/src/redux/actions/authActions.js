import { GET_ERRORS } from "./types";
import axios from "axios";

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

export const loginUser = data => dispatch => {
  axios.post("api/auth/");
};
