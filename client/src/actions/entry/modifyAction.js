import axios from "axios";

export const ENTRY_MODIFY_START = "ENTRY_MODIFY_START";
export const ENTRY_MODIFY_SUCCESS = "ENTRY_MODIFY_SUCCESS";
export const ENTRY_MODIFY_FAIL = "ENTRY_MODIFY_FAIL";

export const SubmitAction = entry => dispatch => {
  dispatch({ type: ENTRY_MODIFY_START });
  axios
    .post("localhost:5000/api/entry")
    .then(res => dispatch({ type: ENTRY_MODIFY_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ENTRY_MODIFY_FAIL, payload: err }));
};
