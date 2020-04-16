import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import address from "../../../../config/address";
import { removeToken } from "../../../../utils/authService";

export const USER_DELETE_START = "USER_DELETE_START";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

export const deleteUser = () => (dispatch) => {
  dispatch({ type: USER_DELETE_START });
  axiosWithAuth()
    .get(`${address.LOCALHOST}/api/user/delete`)
    .then((res) => {
      console.log({ res });
      removeToken();
      dispatch({ type: USER_DELETE_SUCCESS });
    })
    .catch((err) => {
      console.log({ err });
      dispatch({ type: USER_DELETE_FAIL });
    });
};
