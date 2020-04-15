import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import address from "../../../config/address";

export const ENTRY_MODIFY_START = "ENTRY_MODIFY_START";
export const ENTRY_MODIFY_SUCCESS = "ENTRY_MODIFY_SUCCESS";
export const ENTRY_MODIFY_FAIL = "ENTRY_MODIFY_FAIL";

export const modifyAction = (id, entry, history) => (dispatch) => {
  dispatch({ type: ENTRY_MODIFY_START });
  axiosWithAuth()
    .put(`${address.LOCALHOST}/api/entry/${id}`, entry)
    .then((res) => {
      dispatch({ type: ENTRY_MODIFY_SUCCESS, payload: res.data });
      history.goBack();
    })
    .catch((err) => dispatch({ type: ENTRY_MODIFY_FAIL, payload: err }));
};
