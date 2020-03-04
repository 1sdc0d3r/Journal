import { axiosWithAuth } from "../../../utils/axiosWithAuth";
export const ENTRY_GET_START = "ENTRY_GET_START";
export const ENTRY_GET_SUCCESS = "ENTRY_GET_SUCCESS";
export const ENTRY_GET_FAIL = "ENTRY_GET_FAIL";

export const ENTRY_ID_GET_START = "ENTRY_ID_GET_START";
export const ENTRY_ID_GET_SUCCESS = "ENTRY_ID_GET_SUCCESS";
export const ENTRY_ID_GET_FAIL = "ENTRY_ID_GET_FAIL";

export const getEntriesAction = id => dispatch => {
  dispatch({ type: ENTRY_GET_START });
  if (!id) {
    console.log("no ID");
    axiosWithAuth()
      .get(`http://localhost:5000/api/entry`)
      .then(res => dispatch({ type: ENTRY_GET_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: ENTRY_GET_FAIL, payload: err }));
  } else {
    axiosWithAuth()
      .get(`http://localhost:5000/api/entry/${id}`)
      .then(res => dispatch({ type: ENTRY_ID_GET_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: ENTRY_ID_GET_FAIL, payload: err }));
  }
};
