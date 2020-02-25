import { USER_REGISTER } from "../actions/registerAction";
import { USER_LOGIN } from "../actions/loginAction";
import { USER_LOGOUT } from "../actions/logoutAction";

const initialState = {
  loggedIn: false,
  users: [
    { id: 1, name: "Jack", position: "admin" },
    { id: 2, name: "Ben", position: "user" },
    { id: 3, name: "Karen", position: "user" }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state };
    case USER_LOGIN:
      return { ...state };
    case USER_LOGOUT:
      return { ...state, loggedIn: !state.loggedIn };

    default:
      return state;
  }
};
