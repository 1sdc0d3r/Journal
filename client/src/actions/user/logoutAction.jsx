import axios from "axios";

export const USER_LOGOUT_START = "USER_LOGOUT_START";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";

export const logoutAction = () => dispatch => {
  dispatch({ type: USER_LOGOUT_START });
  axios
    .get("https://micro-journal.herokuapp.com/api/logout")
    .then(res =>
      dispatch({ type: USER_LOGOUT_SUCCESS, payload: res.data.message })
    )
    .catch(err =>
      dispatch({
        type: USER_LOGOUT_FAIL,
        payload: err.response.data.errorMessage
      })
    );
};
