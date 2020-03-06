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
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    //* REGISTER
    case USER_REGISTER_START:
      return { ...state, isFetching: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: null
      };
    case USER_REGISTER_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    //* LOGIN
    case USER_LOGIN_START:
      return { ...state, isFetching: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: null
      };
    case USER_LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
