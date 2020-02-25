export const USER_REGISTER = "USER_REGISTER";

export const registerAction = data => {
  return {
    type: USER_REGISTER,
    payload: data
  };
};
