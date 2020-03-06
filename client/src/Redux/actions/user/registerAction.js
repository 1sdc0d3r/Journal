import axios from "axios";
import { setToken } from "../../../utils/authService";
import address from "../../../config/address";

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const registerAction = (user, history) => dispatch => {
  dispatch({ type: USER_REGISTER_START, payload: user });
  axios
    .post(`${address.LOCALHOST}/api/auth/register`, user)
    .then(res => {
      setToken(res.data.token);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.user });
      history.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.response.data.errorMessage
      })
    );
};
