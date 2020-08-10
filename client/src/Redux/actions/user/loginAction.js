import axios from "axios";
import { setToken, setUser } from "../../../utils/authService";
import address from "../../../config/address";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const loginAction = (credentials, history) => (dispatch) => {
  dispatch({ type: USER_LOGIN_START, payload: credentials });
  axios
    .post(`${address}/api/auth/login`, credentials)
    .then((res) => {
      setToken(res.data.user.token);
      setUser(res.data.user.first_name);
      dispatch({ type: USER_LOGIN_SUCCESS });
      history.push("/");
    })
    .catch((err) =>
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response.data.errorMessage,
      })
    );
};

export const loginActionSuccess = () => (dispatch) =>
  dispatch({ type: USER_LOGIN_SUCCESS });
