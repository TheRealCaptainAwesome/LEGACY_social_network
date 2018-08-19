import { GET_ERRORS } from "./types";
import axios from "axios";

export const registerUser = data => dispatch => {
  axios
    .post("/api/auth/register", data)
    .then(res => console.log(res))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
