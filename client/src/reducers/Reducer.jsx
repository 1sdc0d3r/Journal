import { USER_LOGIN } from "../actions/loginAction";
import { USER_REGISTER } from "../actions/registerAction";

const initialState = {};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
};
