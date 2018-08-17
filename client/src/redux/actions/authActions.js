import { TRY_DISPATCH } from "./types";

export const registerUser = data => {
  return {
    type: TRY_DISPATCH,
    payload: data
  };
};
