import axios from "axios";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const loginAction = credentials => dispatch => {
  dispatch({ type: USER_LOGIN_START, payload: credentials });
  axios
    .get("https://micro-journal.herokuapp.com/api/auth/login", {
      headers: credentials
    })
    .then(user => dispatch({ type: USER_LOGIN_SUCCESS, payload: user.data }))
    .catch(err =>
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response.data.errorMessage
      })
    );
};
