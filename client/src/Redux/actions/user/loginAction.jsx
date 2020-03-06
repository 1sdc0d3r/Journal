import axios from "axios";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const loginAction = (credentials, history) => dispatch => {
  dispatch({ type: USER_LOGIN_START, payload: credentials });
  axios
    .get("http://localhost:5000/api/auth/login", {
      headers: credentials
    })
    .then(res => {
      localStorage.setItem("journalToken", res.data.token);
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
