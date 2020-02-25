export const USER_LOGOUT = "USER_LOGOUT";

export const logoutAction = () => dispatch => {
  dispatch({ type: USER_LOGOUT, payload: "data" });
};
