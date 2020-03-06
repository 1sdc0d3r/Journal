import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_GET_START = "ENTRY_GET_START";
export const ENTRY_GET_SUCCESS = "ENTRY_GET_SUCCESS";
export const ENTRY_GET_FAIL = "ENTRY_GET_FAIL";

export const getEntriesAction = (limit, offset, history) => dispatch => {
  dispatch({ type: ENTRY_GET_START });
  axiosWithAuth()
    .get(`${address.LOCALHOST}/api/entry`, {
      params: {
        limit: limit,
        offset: offset
      }
    })
    .then(res => {
      dispatch({ type: ENTRY_GET_SUCCESS, payload: res.data });
      //todo history.push("/journal");
    })
    .catch(err => dispatch({ type: ENTRY_GET_FAIL, payload: err }));
};
