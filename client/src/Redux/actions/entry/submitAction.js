import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export const ENTRY_SUBMIT_START = "ENTRY_SUBMIT_START";
export const ENTRY_SUBMIT_SUCCESS = "ENTRY_SUBMIT_SUCCESS";
export const ENTRY_SUBMIT_FAIL = "ENTRY_SUBMIT_FAIL";

export const submitAction = (entry, history) => dispatch => {
  dispatch({ type: ENTRY_SUBMIT_START });
  axiosWithAuth()
    .post("https://micro-journal.herokuapp.com/api/entry", entry)
    .then(res => {
      dispatch({ type: ENTRY_SUBMIT_SUCCESS, payload: res.config.data });
      history.push("/journal");
    })
    .catch(err => {
      dispatch({ type: ENTRY_SUBMIT_FAIL, payload: err.response });
    });
};
