import axios from "axios";

export const ENTRY_DELETE_START = "ENTRY_DELETE_START";
export const ENTRY_DELETE_SUCCESS = "ENTRY_DELETE_SUCCESS";
export const ENTRY_DELETE_FAIL = "ENTRY_DELETE_FAIL";

export const SubmitAction = entry => dispatch => {
  dispatch({ type: ENTRY_DELETE_START });
  axios
    .post("localhost:5000/api/entry")
    .then(res => dispatch({ type: ENTRY_DELETE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ENTRY_DELETE_FAIL, payload: err }));
};
