import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";
import { removeToken, removeUser } from "../../../utils/authService";

export const USER_DELETE_START = "USER_DELETE_START";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

export const deleteUser = (history) => (dispatch) => {
  dispatch({ type: USER_DELETE_START });
  axiosWithAuth()
    .delete(`${address.LOCALHOST}/api/user`)
    .then(() => {
      removeToken();
      removeUser();
      dispatch({
        type: USER_DELETE_SUCCESS,
        payload: "User successfully deleted.",
      });
      history.push("/login");
    })
    .catch((err) => {
      console.log({ err });
      // todo pass error to reducer
      dispatch({ type: USER_DELETE_FAIL, payload: err.response.data.message });
    });
};
