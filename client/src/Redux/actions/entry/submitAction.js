import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export const ENTRY_SUBMIT_START = "ENTRY_SUBMIT_START";
export const ENTRY_SUBMIT_SUCCESS = "ENTRY_SUBMIT_SUCCESS";
export const ENTRY_SUBMIT_FAIL = "ENTRY_SUBMIT_FAIL";

export const submitAction = (entry, history) => dispatch => {
  console.log("submitAction", entry);
  dispatch({ type: ENTRY_SUBMIT_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/entry", entry)
    .then(res => {
      dispatch({ type: ENTRY_SUBMIT_SUCCESS, payload: res.data });
      history.push("/journal");
    })
    .catch(err => dispatch({ type: ENTRY_SUBMIT_FAIL, payload: err.response }));
};
