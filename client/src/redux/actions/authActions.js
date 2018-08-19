import { REGISTER_DISPATCH } from "./types";

export const registerUser = data => {
  return {
    type: REGISTER_DISPATCH,
    payload: data
  };
};
