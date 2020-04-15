import { getToken } from "../../../utils/authService";

export const CHECK_TOKEN_SUCCESS = "CHECK_TOKEN_SUCCESS";
export const CHECK_TOKEN_FAIL = "CHECK_TOKEN_FAIL";

export const checkToken = () => (dispatch) => {
  getToken()
    ? dispatch({ type: CHECK_TOKEN_SUCCESS })
    : dispatch({ type: CHECK_TOKEN_FAIL });
};
