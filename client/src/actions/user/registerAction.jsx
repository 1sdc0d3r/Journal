import axios from "axios";

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const registerAction = user => dispatch => {
  dispatch({ type: USER_REGISTER_START, payload: user });
  axios
    .post("https://micro-journal.herokuapp.com/api/auth/register", user)
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: USER_REGISTER_FAIL, payload: err.response.data.message })
    );
};
