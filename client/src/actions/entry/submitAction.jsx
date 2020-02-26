import axios from "axios";

export const ENTRY_SUBMIT_START = "ENTRY_SUBMIT_START";
export const ENTRY_SUBMIT_SUCCESS = "ENTRY_SUBMIT_SUCCESS";
export const ENTRY_SUBMIT_FAIL = "ENTRY_SUBMIT_FAIL";

export const SubmitAction = entry => dispatch => {
  dispatch({ type: ENTRY_SUBMIT_START });
  axios
    .post("localhost:5000/api/entry")
    .then(res => dispatch({ type: ENTRY_SUBMIT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ENTRY_SUBMIT_FAIL, payload: err }));
};
