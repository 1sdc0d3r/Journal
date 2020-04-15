import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/user/registerAction";

import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../actions/user/loginAction";

import {
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAIL,
} from "../actions/user/checkToken";

import { LOGOUT } from "../actions/user/logoutAction";

const initialState = {
  user: {},
  loggedIn: false,
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //* EXISTING TOKEN?
    case CHECK_TOKEN_SUCCESS:
      return { ...state, loggedIn: true };
    case CHECK_TOKEN_FAIL:
      return { ...state, loggedIn: false };
    //* REGISTER
    case USER_REGISTER_START:
      return { ...state, isFetching: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        isFetching: false,
        error: null,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        error: action.payload,
      };

    //* LOGIN
    case USER_LOGIN_START:
      return { ...state, isFetching: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        isFetching: false,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
