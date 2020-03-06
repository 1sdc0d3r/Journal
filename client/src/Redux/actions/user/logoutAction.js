export const LOGOUT = "LOGOUT";

export const logoutAction = history => dispatch => {
  dispatch({ type: LOGOUT });
  console.log({ history });
  history.push("/login");
};
