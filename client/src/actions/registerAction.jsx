import axios from "axios";

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const registerAction = user => dispatch => {
  dispatch({ type: USER_REGISTER_START });
  axios
    .post("http://localhost:5000/api/register", user)
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res });
      console.log(res);
    })
    .catch(err => dispatch({ type: USER_REGISTER_FAIL, payload: err }));
};
