import { USER_REGISTER } from "../actions/registerAction";
import { USER_LOGIN } from "../actions/loginAction";
import { USER_LOGOUT } from "../actions/logoutAction";

const initialState = {
  loggedIn: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state };
    case USER_LOGIN:
      return { ...state };
    case USER_LOGOUT:
      return { ...state, loggedIn: !state.loggedIn };

    default:
      return state;
  }
};
