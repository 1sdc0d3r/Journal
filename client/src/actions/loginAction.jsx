export const USER_LOGIN = "USER_LOGIN";

export const loginAction = credentials => dispatch => {
  dispatch({ type: USER_LOGIN, payload: credentials });
};
