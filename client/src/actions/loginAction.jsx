import axios from "axios";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const loginAction = credentials => dispatch => {
  dispatch({ type: USER_LOGIN_START, payload: credentials });
};
