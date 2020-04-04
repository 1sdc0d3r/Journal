import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entryReducer from "./entryReducer";
import journalReducer from "./journalReducer";

export default combineReducers({
  userReducer,
  entryReducer,
  journalReducer
});
