export const USER_LOGIN = "USER_LOGIN";

export const login = credentials => {
  return {
    type: USER_LOGIN,
    payload: credentials
  };
};
