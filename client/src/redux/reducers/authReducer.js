import { REGISTER_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
