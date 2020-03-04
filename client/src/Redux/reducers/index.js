import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entryReducer from "./entryReducer";

export default combineReducers({
  userReducer,
  entryReducer
});
