export const USER_LOGIN = "USER_LOGIN";

export const loginAction = credentials => {
  return {
    type: USER_LOGIN,
    payload: credentials
  };
};
