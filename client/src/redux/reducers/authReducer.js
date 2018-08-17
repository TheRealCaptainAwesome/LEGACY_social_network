import { TRY_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRY_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
