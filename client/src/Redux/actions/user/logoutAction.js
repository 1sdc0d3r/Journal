import { removeToken } from "../../../utils/authService";
export const LOGOUT = "LOGOUT";

export const logoutAction = () => dispatch => {
  dispatch({ type: LOGOUT });
  removeToken();
};
