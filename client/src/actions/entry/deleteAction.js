import axios from "axios";

export const ENTRY_DELETE_START = "ENTRY_DELETE_START";
export const ENTRY_DELETE_SUCCESS = "ENTRY_DELETE_SUCCESS";
export const ENTRY_DELETE_FAIL = "ENTRY_DELETE_FAIL";

export const SubmitAction = id => dispatch => {
  dispatch({ type: ENTRY_DELETE_START });
  axios
    .delete(`localhost:5000/api/entry/${id}`)
    .then(res => dispatch({ type: ENTRY_DELETE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ENTRY_DELETE_FAIL, payload: err }));
};
