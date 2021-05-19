import {
  getToken
} from "../../utils/authService";
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
  LOGOUT
} from "../actions/user/logoutAction";

import {
  USER_DELETE_START,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../actions/user/deleteUser";

const initialState = {
  authenticated: getToken() ? true : false,
  isFetching: true,
  loginError: null,
  registerError: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    //* REGISTER
    case USER_REGISTER_START:
      return {
        ...state, isFetching: true
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        authenticated: true,
          isFetching: false,
          registerError: null,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isFetching: false,
          authenticated: false,
          registerError: action.payload,
      };

      //* LOGIN
    case USER_LOGIN_START:
      return {
        ...state, isFetching: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
          isFetching: false,
          loginError: null,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
          authenticated: false,
          loginError: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
        authenticated: false,
      };

      //* DELETE USER
    case USER_DELETE_START:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
          authenticated: false,
          error: null,
      };
    case USER_DELETE_FAIL:
      return {
        ...state,
        isFetching: false,
          authenticated: false,
          error: action.payload,
      };

    default:
      return state;
  }
};
