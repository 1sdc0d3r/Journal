import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_ID_GET_START = "ENTRY_ID_GET_START";
export const ENTRY_ID_GET_SUCCESS = "ENTRY_ID_GET_SUCCESS";
export const ENTRY_ID_GET_FAIL = "ENTRY_ID_GET_FAIL";

export const getEntryIdAction = (id, history) => dispatch => {
  dispatch({ type: ENTRY_ID_GET_START });
  axiosWithAuth()
    .get(`${address.LOCALHOST}/api/entry/${id}`)
    .then(res => {
      dispatch({ type: ENTRY_ID_GET_SUCCESS, payload: res.data });
      history.push("/entry");
    })
    .catch(err => dispatch({ type: ENTRY_ID_GET_FAIL, payload: err }));
};
