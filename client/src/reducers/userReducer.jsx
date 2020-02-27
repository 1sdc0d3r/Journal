import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../actions/user/registerAction";

import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../actions/user/loginAction";
import {
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL
} from "../actions/user/logoutAction";

const initialState = {
  user: null,
  token: null,
  newUser: null,
  isRegistering: false,
  isLoggingIn: false,
  isLoggingOut: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    //* REGISTER
    case USER_REGISTER_START:
      return { ...state, newUser: action.payload, isRegistering: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        newUser: null,
        isRegistering: false,
        error: null
      };
    case USER_REGISTER_FAIL:
      return { ...state, isRegistering: false, error: action.payload };

    //* LOGIN
    case USER_LOGIN_START:
      return { ...state, isLoggingIn: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggingIn: false,
        error: null
      };
    case USER_LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };

    //* LOGOUT
    case USER_LOGOUT_START:
      return { ...state, isLoggingOut: true };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        isLoggingOut: false,
        error: null
      };
    case USER_LOGOUT_FAIL:
      return { ...state, isLoggingOut: false, error: action.payload };

    default:
      return state;
  }
};
