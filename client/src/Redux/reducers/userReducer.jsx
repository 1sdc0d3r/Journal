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

const initialState = {
  user: {},
  isRegistering: false,
  isLoggingIn: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    //* REGISTER
    case USER_REGISTER_START:
      return { ...state, user: action.payload, isRegistering: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isRegistering: false,
        error: null
      };
    case USER_REGISTER_FAIL:
      return { ...state, isRegistering: false, error: action.payload };

    //* LOGIN
    case USER_LOGIN_START:
      return { ...state, user: action.payload, isLoggingIn: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggingIn: false,
        error: null
      };
    case USER_LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };

    default:
      return state;
  }
};
