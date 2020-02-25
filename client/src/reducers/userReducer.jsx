import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../actions/registerAction";

import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../actions/loginAction";
import {
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL
} from "../actions/logoutAction";

const initialState = {
  loggedIn: false,
  isRegistering: false,
  isLoggingIn: false,
  isLoggingOut: false,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //* REGISTER
    case USER_REGISTER_START:
      return { ...state, isRegistering: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, isRegistering: false };
    case USER_REGISTER_FAIL:
      return { ...state, isRegistering: false, error: action.payload };

    //* LOGIN
    case USER_LOGIN_START:
      return { ...state, isLoggingIn: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false };
    case USER_LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };

    //* LOGOUT
    case USER_LOGOUT_START:
      return { ...state, isLoggingOut: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, isLoggingOut: false };
    case USER_LOGOUT_FAIL:
      return { ...state, isLoggingOut: false, error: action.payload };

    default:
      return state;
  }
};
