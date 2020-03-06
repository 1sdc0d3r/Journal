import axios from "axios";
import { setToken } from "../../../utils/authService";
import address from "../../../config/address";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const loginAction = (credentials, history) => dispatch => {
  dispatch({ type: USER_LOGIN_START, payload: credentials });
  axios
    .get(`${address.LOCALHOST}/api/auth/login`, {
      headers: credentials
    })
    .then(res => {
      setToken(res.data.token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.user });
      history.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response.data.errorMessage
      })
    );
};
