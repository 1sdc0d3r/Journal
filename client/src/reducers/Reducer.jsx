import axios from "axios";
const initialState = {};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
};
