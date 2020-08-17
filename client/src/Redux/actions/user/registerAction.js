import axios from "axios";
import { setToken, setUser } from "../../../utils/authService";
import address from "../../../config/address";

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const registerAction = (user, history) => (dispatch) => {
  dispatch({ type: USER_REGISTER_START, payload: user });
  axios
    .post(`${address}/api/auth/register`, user)
    .then((res) => {
      setToken(res.data.user.token);
      setUser(res.data.user.first_name);
      dispatch({ type: USER_REGISTER_SUCCESS });
      history.push("/");
    })
    .catch((err) =>
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.response.data.message,
      })
    );
};
